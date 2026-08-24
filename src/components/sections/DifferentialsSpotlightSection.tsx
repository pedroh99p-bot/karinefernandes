import type { ResolvedProspect } from "@/prospects/types";
import { createWhatsAppHref } from "@/lib/whatsapp";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";

type DifferentialsSpotlightSectionProps = {
  prospect: ResolvedProspect;
};

export function DifferentialsSpotlightSection({ prospect }: DifferentialsSpotlightSectionProps) {
  const spotlight = prospect.differentialsSpotlight;

  if (!spotlight.enabled) {
    return null;
  }

  const whatsappHref = createWhatsAppHref(
    prospect.contact.whatsapp,
    prospect.contact.defaultMessage,
    {
      origin: "tres-diferenciais",
      customerMessage: spotlight.whatsappMessage
    }
  );

  return (
    <section
      className="section differentials-spotlight"
      data-section-tone="dark"
      id="tres-diferenciais"
    >
      <Reveal className="differentials-spotlight__heading" preset="slide-right">
        <SectionHeading
          eyebrow={spotlight.eyebrow}
          headline={spotlight.headline}
          icon="spark"
          subtitle={spotlight.description}
        />
      </Reveal>
      <div className="differentials-spotlight__grid">
        {spotlight.items.map((item, index) => (
          <Reveal key={item.title} delay={index * 70} preset="slide-left">
            <article className="differentials-spotlight__card">
              <span className="differentials-spotlight__number">0{index + 1}</span>
              <Icon name={item.icon} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal className="differentials-spotlight__cta" delay={180}>
        <Button href={whatsappHref} icon="whatsapp" variant="whatsapp">
          {spotlight.ctaLabel}
        </Button>
      </Reveal>
    </section>
  );
}
