import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
      {
        protocol: "https",
        hostname: "images.clerk.dev",
      },
      {
        protocol: "https",
        hostname: "uploadthing.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
    // typescript: {
    //   ignoreBuildErrors: true,
    // },
  },
  experimental: {
    // serverActions: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
};

export default nextConfig;
