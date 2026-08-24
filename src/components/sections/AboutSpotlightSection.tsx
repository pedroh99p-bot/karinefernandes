import type { ResolvedProspect } from "@/prospects/types";
import { createWhatsAppHref } from "@/lib/whatsapp";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { SectionHeading } from "@/components/ui/SectionHeading";

type AboutSpotlightSectionProps = {
  prospect: ResolvedProspect;
};

export function AboutSpotlightSection({ prospect }: AboutSpotlightSectionProps) {
  const about = prospect.aboutSpotlight;

  if (!about.enabled) {
    return null;
  }

  return (
    <section className="section about-spotlight" data-section-tone="dark" id="sobre">
      <Reveal className="about-spotlight__heading" preset="slide-right">
        <SectionHeading
          eyebrow={about.eyebrow}
          headline={about.headline}
          icon="spark"
          subtitle={about.description}
        />
      </Reveal>

      <Reveal className="about-spotlight__profile" preset="image-reveal">
        <div className="about-spotlight__portrait-frame">
          <ImageWithFallback
            className="about-spotlight__portrait"
            fallback={prospect.assets.specialistPortrait ?? prospect.assets.symbol}
            image={about.portrait ?? prospect.assets.specialistPortrait}
            sizes="(min-width: 760px) 24rem, 42vw"
          />
        </div>
        <blockquote className="about-spotlight__quote">
          {about.quoteParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </blockquote>
      </Reveal>

      <div className="about-spotlight__pillars">
        {about.items.map((item, index) => {
          const href = createWhatsAppHref(prospect.contact.whatsapp, prospect.contact.defaultMessage, {
            origin: `sobre-pilar-${index + 1}`,
            customerMessage: item.whatsappMessage
          });

          return (
            <Reveal key={item.title} delay={index * 70}>
              <article className="about-spotlight__pillar">
                <span className="about-spotlight__pillar-icon">
                  <Icon name={item.icon} />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <Button href={href} icon="whatsapp" variant="ghost">
                    {item.ctaLabel}
                  </Button>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
