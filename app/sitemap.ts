import type { MetadataRoute } from "next";
import { posts } from "@/content/blog";
import { detailServices } from "@/content/services";
import { localePath, locales, servicePath } from "@/lib/i18n";
import { baseUrl } from "@/lib/seo";

const paths = [
  "/",
  "/hizmetler",
  "/blog",
  ...detailServices.map((s) => servicePath(s.slug!)),
  ...posts.map((p) => `/${p.slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.flatMap((p) =>
    locales.map((l) => ({
      url: baseUrl + localePath(l, p),
      alternates: { languages: Object.fromEntries(locales.map((x) => [x, baseUrl + localePath(x, p)])) },
    })),
  );
}
