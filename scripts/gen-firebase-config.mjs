// Generates firebase.json from content/*.ts so rewrites/redirects never go stale.
import { readFileSync, writeFileSync } from "node:fs";

const slugs = (file) => [...readFileSync(file, "utf8").matchAll(/^\s*slug:\s*"([^"]+)"/gm)].map((m) => m[1]);
const services = slugs("content/services.ts");
const posts = slugs("content/blog.ts");

const file = (p) => ({ source: p, destination: `/tr${p === "/" ? "" : p}.html` });
const rewrites = [{ source: "/opengraph-image", destination: "/tr/opengraph-image" }, { source: "/twitter-image", destination: "/tr/twitter-image" }, ...["/", "/hizmetler", "/blog", ...services.map((s) => `/hizmetler/${s}`), ...posts.map((s) => `/${s}`)].map(file)];

const redirects = [{ source: "/tr", destination: "/", type: 301 }, { source: "/tr/:rest*", destination: "/:rest", type: 301 }];
for (const prefix of ["", "/en", "/de"])
  for (const s of services) redirects.push({ source: `${prefix}/${s}`, destination: `${prefix}/hizmetler/${s}`, type: 301 });

const config = {
  hosting: {
    public: "out",
    ignore: ["firebase.json", "**/.*", "**/node_modules/**"],
    cleanUrls: true,
    trailingSlash: false,
    redirects,
    rewrites,
    headers: [{ source: "**/opengraph-image", headers: [{ key: "Content-Type", value: "image/png" }] }, { source: "**/twitter-image", headers: [{ key: "Content-Type", value: "image/png" }] }, { source: "/_next/static/**", headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] }],
  },
};
writeFileSync("firebase.json", JSON.stringify(config, null, 2) + "\n");
console.log(`firebase.json: ${rewrites.length} rewrites, ${redirects.length} redirects`);
