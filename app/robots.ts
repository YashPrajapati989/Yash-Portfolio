import type { MetadataRoute } from "next";

const BASE_URL = "https://yashprajapati.vercel.app"; // Update with your real domain

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
