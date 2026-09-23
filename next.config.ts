import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  allowedDevOrigins: ["192.168.1.6"],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
