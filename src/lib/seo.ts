import type { Metadata } from "next";
import type { ResolvedProspect } from "@/prospects/types";

function toAbsoluteUrl(src: string | null, canonical: string | null): string | undefined {
  if (!src) {
    return undefined;
  }

  if (/^https?:\/\//.test(src)) {
    return src;
  }

  if (!canonical) {
    return undefined;
  }

  return new URL(src, new URL(canonical).origin).toString();
}

export function createProspectMetadata(prospect: ResolvedProspect): Metadata {
  const canonicalOrigin = prospect.seo.canonical
    ? new URL(prospect.seo.canonical).origin
    : null;
  const metadataBase = new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? canonicalOrigin ?? "http://localhost:3000"
  );
  const robots = prospect.canIndex
    ? {
        index: true,
        follow: true
      }
    : {
        index: false,
        follow: false,
        googleBot: {
          index: false,
          follow: false
        }
      };

  return {
    metadataBase,
    title: prospect.seo.title,
    description: prospect.seo.description,
    alternates: prospect.seo.canonical ? { canonical: prospect.seo.canonical } : undefined,
    robots,
    icons: {
      icon: prospect.assets.favicon
    },
    openGraph: {
      title: prospect.seo.title,
      description: prospect.seo.description,
      type: "website",
      url: prospect.seo.canonical ?? `/${prospect.slug}`,
      images: [
        {
          url: prospect.assets.socialPreview,
          width: 1200,
          height: 630,
          alt: `${prospect.business.name} — prévia social`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: prospect.seo.title,
      description: prospect.seo.description,
      images: [prospect.assets.socialPreview]
    }
  };
}

export function createLocalBusinessJsonLd(prospect: ResolvedProspect) {
  const postalAddress = prospect.location.postalAddress;

  return {
    "@context": "https://schema.org",
    "@type": prospect.seo.schemaType,
    "@id": prospect.seo.canonical ? `${prospect.seo.canonical}#business` : undefined,
    name: prospect.business.name,
    description: prospect.business.description,
    areaServed: prospect.location.region,
    address: postalAddress
      ? {
          "@type": "PostalAddress",
          streetAddress: postalAddress.streetAddress,
          addressLocality: postalAddress.addressLocality,
          addressRegion: postalAddress.addressRegion,
          postalCode: postalAddress.postalCode,
          addressCountry: postalAddress.addressCountry
        }
      : prospect.location.address,
    telephone: prospect.contact.phoneLabel ?? prospect.contact.whatsappLabel,
    email: prospect.contact.email ?? undefined,
    image: toAbsoluteUrl(prospect.assets.socialPreview, prospect.seo.canonical),
    logo: toAbsoluteUrl(prospect.assets.logo.src, prospect.seo.canonical),
    url: prospect.seo.canonical ?? undefined,
    sameAs: [prospect.contact.instagramUrl].filter(Boolean),
    founder: {
      "@type": "Person",
      name: prospect.specialist.name,
      jobTitle: prospect.specialist.role
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Serviços de ${prospect.business.category.toLowerCase()}`,
      itemListElement: prospect.enabledServices.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.shortDescription
        }
      }))
    }
  };
}

export function createFaqJsonLd(prospect: ResolvedProspect) {
  if (!prospect.faq.enabled || prospect.faq.items.length === 0) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: prospect.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}
