import type { ResolvedProspect } from "@/prospects/types";
import { createWhatsAppHref } from "@/lib/whatsapp";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";

type FaqSectionProps = {
  prospect: ResolvedProspect;
};

export function FaqSection({ prospect }: FaqSectionProps) {
  if (!prospect.faq.enabled || prospect.faq.items.length === 0) {
    return null;
  }

  const whatsappHref = createWhatsAppHref(
    prospect.contact.whatsapp,
    prospect.contact.defaultMessage,
    { origin: "faq" }
  );

  return (
    <section className="section faq" data-section-tone="dark" id="duvidas-frequentes">
      <Reveal className="faq__heading" preset="slide-right">
        <SectionHeading
          align="left"
          eyebrow={prospect.faq.eyebrow}
          headline={prospect.faq.headline}
          icon="message"
          subtitle={prospect.faq.description}
        />
      </Reveal>

      <div className="faq__list">
        {prospect.faq.items.map((item, index) => (
          <Reveal key={item.question} delay={index * 45} preset="fade-up">
            <details className="faq__item">
              <summary>
                <span>{item.question}</span>
                <Icon name="chevron-right" />
              </summary>
              <div className="faq__answer">
                <p>{item.answer}</p>
              </div>
            </details>
          </Reveal>
        ))}
      </div>

      <Reveal className="faq__cta" delay={120}>
        <p>Ficou com alguma dúvida específica sobre o seu caso?</p>
        <Button href={whatsappHref} icon="whatsapp" variant="whatsapp">
          Conversar com a Karine
        </Button>
      </Reveal>
    </section>
  );
}
