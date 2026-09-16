import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  allowedDevOrigins: ["10.1.11.155"],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
