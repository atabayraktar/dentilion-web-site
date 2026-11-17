import type { MetadataRoute } from "next";
import { posts } from "@/content/blog";
import { detailServices } from "@/content/services";
import { localePath, locales } from "@/lib/i18n";
import { baseUrl } from "@/lib/seo";

const paths = [
  "/",
  "/hakkimizda",
  "/hizmetler",
  "/blog",
  "/iletisim",
  ...detailServices.map((s) => `/${s.slug}`),
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
