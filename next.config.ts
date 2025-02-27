import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  ...(isProd && {
    basePath: "/portfolio",
    assetPrefix: "/portfolio",
  }),
};

export default nextConfig;