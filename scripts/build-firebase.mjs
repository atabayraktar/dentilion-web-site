// Static export build for Firebase Hosting. proxy.ts is unsupported in export, so it is moved aside temporarily.
import { existsSync, readFileSync, renameSync, writeFileSync } from "node:fs";
import { spawnSync } from "node:child_process";

const run = (cmd, args, env = {}) => {
  const r = spawnSync(cmd, args, { stdio: "inherit", shell: true, env: { ...process.env, ...env } });
  if (r.status) throw new Error(`${cmd} ${args.join(" ")} failed`);
};

// Route handlers need force-static in export (rejected by cacheComponents in normal builds), and the
// image routes need generateStaticParams, so these files are patched temporarily and restored below.
const staticRoutes = ["app/llms.txt/route.ts", "app/robots.ts", "app/sitemap.ts"];
const imageRoutes = ["app/[locale]/opengraph-image.tsx", "app/[locale]/twitter-image.tsx"];
const params = `\nexport const generateStaticParams = () => ["tr", "en", "de"].map((locale) => ({ locale }));\n`;
const patched = [...staticRoutes, ...imageRoutes].map((f) => [f, readFileSync(f, "utf8")]);
const hidden = "proxy.ts.export-bak";

run("node", ["scripts/gen-firebase-config.mjs"]);
if (existsSync("proxy.ts")) renameSync("proxy.ts", hidden);
try {
  for (const [f, src] of patched)
    writeFileSync(f, `export const dynamic = "force-static";\n${src}${imageRoutes.includes(f) ? params : ""}`);
  run("npx", ["next", "build"], { STATIC_EXPORT: "1" });
} catch (e) {
  console.error(e.message);
  process.exitCode = 1;
} finally {
  for (const [f, src] of patched) writeFileSync(f, src);
  if (existsSync(hidden)) renameSync(hidden, "proxy.ts");
}
