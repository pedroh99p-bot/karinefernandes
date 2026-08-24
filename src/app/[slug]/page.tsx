import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createFaqJsonLd, createLocalBusinessJsonLd, createProspectMetadata } from "@/lib/seo";
import { getAllProspectSlugs, getProspectBySlug } from "@/prospects/registry";
import { createThemeStyle } from "@/themes/apply-theme";
import { CurtainPreloader } from "@/components/animations/CurtainPreloader";
import { FloatingActions } from "@/components/chatbot/FloatingActions";
import { BottomMobileCta } from "@/components/layout/BottomMobileCta";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SectionDivider } from "@/components/layout/SectionDivider";
import { AuthorityRoller } from "@/components/rollers/AuthorityRoller";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SpecialistSection } from "@/components/sections/SpecialistSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { WhatsAppGroupSection } from "@/components/sections/WhatsAppGroupSection";
import { DifferentialsSpotlightSection } from "@/components/sections/DifferentialsSpotlightSection";
import { GoogleTagManager } from "@/components/tracking/GoogleTagManager";
import { AboutSpotlightSection } from "@/components/sections/AboutSpotlightSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ConversionTracking } from "@/components/tracking/ConversionTracking";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllProspectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const prospect = getProspectBySlug(slug);

  if (!prospect) {
    return {
      title: "Landing não encontrada",
      robots: {
        index: false,
        follow: false
      }
    };
  }

  return createProspectMetadata(prospect);
}

export default async function ProspectPage({ params }: PageProps) {
  const { slug } = await params;
  const prospect = getProspectBySlug(slug);

  if (!prospect) {
    notFound();
  }

  const jsonLd = createLocalBusinessJsonLd(prospect);
  const faqJsonLd = createFaqJsonLd(prospect);

  return (
    <div className="site-shell" style={createThemeStyle(prospect)}>
      <GoogleTagManager containerId={prospect.tracking.googleTagManagerId} />
      <ConversionTracking />
      <CurtainPreloader
        logo={prospect.assets.preloaderLogo ?? prospect.assets.logo}
        preloader={prospect.preloader}
      />
      <Navbar prospect={prospect} />
      <AuthorityRoller items={prospect.visibleRollerItems} roller={prospect.rollers.authority} />
      <main>
        <HeroSection prospect={prospect} />
        <SectionDivider variant="curve" />
        <AuthorityRoller roller={prospect.rollers.transition} />
        <ServicesSection prospect={prospect} />
        <SectionDivider variant="diagonal" />
        <SpecialistSection prospect={prospect} />
        <SectionDivider variant="layered-gradient" />
        <AboutSpotlightSection prospect={prospect} />
        <SectionDivider variant="glow-line" />
        <DifferentialsSpotlightSection prospect={prospect} />
        <WhatsAppGroupSection prospect={prospect} />
        <TestimonialsSection prospect={prospect} />
        <ProcessSection prospect={prospect} />
        <FaqSection prospect={prospect} />
        <SectionDivider variant="glow-line" />
        <LocationSection prospect={prospect} />
        <SectionDivider variant="grid-fade" />
        <FinalCtaSection prospect={prospect} />
      </main>
      <Footer prospect={prospect} />
      <BottomMobileCta prospect={prospect} />
      <FloatingActions prospect={prospect} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c")
        }}
      />
      {faqJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c")
          }}
        />
      ) : null}
    </div>
  );
}
