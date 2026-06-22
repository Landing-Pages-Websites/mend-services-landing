import type { MetadataRoute } from "next";
import { getSitemapRoutes } from "@/lib/sitemap";

export default function sitemap(): MetadataRoute.Sitemap {
  return getSitemapRoutes();
}
