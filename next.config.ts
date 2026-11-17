import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { deviceSizes: [360, 640, 768, 1024, 1200, 1600, 1920, 2560], qualities: [75, 85] },
  cacheComponents: true,
  partialPrefetching: true,
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
