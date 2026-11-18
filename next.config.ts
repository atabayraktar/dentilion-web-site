import type { NextConfig } from "next";

const staticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  images: { deviceSizes: [360, 480, 640, 768, 1024, 1200, 1600, 1920, 2560], qualities: [75, 85], ...(staticExport && { unoptimized: true }) },
  ...(staticExport ? { output: "export" } : { cacheComponents: true, partialPrefetching: true }),
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
