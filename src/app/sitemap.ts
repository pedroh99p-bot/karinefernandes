import type { MetadataRoute } from "next";
import { getIndexableProspects } from "@/prospects/registry";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return getIndexableProspects().map((prospect) => ({
    url: prospect.seo.canonical!,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
    images: [
      new URL(
        prospect.assets.socialPreview,
        new URL(prospect.seo.canonical!).origin
      ).toString(),
    ],
  }));
}
