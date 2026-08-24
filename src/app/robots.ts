import type { MetadataRoute } from "next";
import { getIndexableProspects } from "@/prospects/registry";

export default function robots(): MetadataRoute.Robots {
  const indexableProspects = getIndexableProspects();
  const firstCanonical = indexableProspects[0]?.seo.canonical;

  if (!firstCanonical) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/"
      }
    };
  }

  const origin = new URL(firstCanonical).origin;

  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${origin}/sitemap.xml`,
    host: origin
  };
}
