import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Compress responses
  compress: true,

  // Strict mode for React — catches bugs early, removed in prod
  reactStrictMode: true,

  // Optimise images
  images: {
    formats: ["image/avif", "image/webp"],
    // Allow GitHub readme-stats images (used in Achievements)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github-readme-stats.vercel.app",
      },
      {
        protocol: "https",
        hostname: "github-readme-streak-stats.herokuapp.com",
      },
    ],
  },

  // Remove X-Powered-By header
  poweredByHeader: false,
};

export default nextConfig;
