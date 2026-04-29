import type { MetadataRoute } from "next";

import { BASE_URL } from "@/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: BASE_URL }, { url: `${BASE_URL}/privacy` }];
}
