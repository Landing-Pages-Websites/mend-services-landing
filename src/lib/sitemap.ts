import type { MetadataRoute } from "next";

export const SITE_URL = "https://book.tlcscape.com";

// Single-route conversion landing page — the homepage is the only indexable route.
export function getSitemapRoutes(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
