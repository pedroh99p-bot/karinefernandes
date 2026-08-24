import type { ResolvedProspect } from "@/prospects/types";
import { createWhatsAppHref } from "@/lib/whatsapp";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { Icon } from "@/components/ui/Icon";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { StatCard } from "@/components/ui/StatCard";

type SpecialistSectionProps = {
  prospect: ResolvedProspect;
};

function SpecialistStats({ prospect }: SpecialistSectionProps) {
  if (!prospect.canShowProof) {
    return null;
  }

  return (
    <div className="specialist__stats">
      {prospect.proof.yearsExperience ? (
        <StatCard
          icon="calendar"
          label="anos"
          suffix="+"
          value={prospect.proof.yearsExperience}
        />
      ) : null}
      {prospect.proof.rating ? (
        <StatCard
          decimals={1}
          icon="star"
          image={prospect.proof.sourceLogo}
          label={
            prospect.layout.specialistVariant === "profile-card"
              ? "no Google"
              : prospect.proof.sourceLabel ?? "avaliação"
          }
          stars={prospect.proof.starCount}
          value={prospect.proof.rating}
        />
      ) : null}
      {prospect.proof.reviewCount ? (
        <StatCard icon="message" label="avaliações" value={prospect.proof.reviewCount} />
      ) : null}
      {prospect.proof.clientsServed ? (
        <StatCard
          icon="user"
          label="clientes atendidos"
          suffix="+"
          value={prospect.proof.clientsServed}
        />
      ) : null}
    </div>
  );
}

export function SpecialistSection({ prospect }: SpecialistSectionProps) {
  const whatsappHref = createWhatsAppHref(prospect.contact.whatsapp, prospect.contact.defaultMessage, {
    origin: "especialista"
  });
  const portrait = prospect.assets.specialistPortrait;
  const specialistFirstName = prospect.specialist.name.split(" ")[0] || "especialista";

  if (prospect.layout.specialistVariant === "profile-card") {
    return (
      <section
        className="section specialist specialist--profile-card"
        data-section-tone="deep"
        id="especialista"
      >
        <Reveal className="specialist-profile__card" preset="image-reveal">
          <p className="eyebrow specialist-profile__eyebrow">
            <Icon className="eyebrow__icon" name="shield" />
            <span>{prospect.copy.specialistEyebrow}</span>
          </p>

          <div className="specialist-profile__visual">
            {portrait?.src ? (
              <ImageWithFallback
                className="specialist-profile__portrait"
                fallback={prospect.assets.symbol}
                image={portrait}
                sizes="(min-width: 940px) 48rem, 100vw"
              />
            ) : (
              <div
                aria-label={portrait?.alt ?? "Espaço reservado para foto do especialista"}
                className="specialist__photo-placeholder"
                role="img"
              />
            )}
          </div>

          <div className="specialist-profile__content">
            <div className="specialist-profile__identity">
              <h2>{prospect.specialist.name}</h2>
              <p>
                {prospect.specialist.role}
                {prospect.proof.yearsExperience
                  ? ` • +${prospect.proof.yearsExperience} anos de experiência`
                  : ""}
              </p>
            </div>

            <p className="specialist-profile__description">{prospect.specialist.description}</p>

            <ul className="specialist-profile__highlights">
              {prospect.benefits.slice(0, 3).map((benefit) => (
                <li key={benefit.title}>
                  <Icon name={benefit.icon} />
                  <span>{benefit.title}</span>
                </li>
              ))}
            </ul>

            <SpecialistStats prospect={prospect} />

            <Button href={whatsappHref} icon="whatsapp" variant="whatsapp">
              Falar com {specialistFirstName}
            </Button>
          </div>
        </Reveal>
      </section>
    );
  }

  return (
    <section className="section specialist" data-section-tone="deep" id="especialista">
      <Reveal className="specialist__card">
        <div className="specialist__header">
          <p className="eyebrow">
            <Icon className="eyebrow__icon" name="shield" />
            <span>{prospect.copy.specialistEyebrow}</span>
          </p>
          <div className="specialist__identity">
            <h2>{prospect.specialist.name}</h2>
            <p>{prospect.specialist.role}</p>
            <span>
              <Icon name="map" />
              {prospect.specialist.city} — {prospect.specialist.state}
            </span>
          </div>
        </div>
        <div className="specialist__visual">
          {portrait?.src ? (
            <ImageWithFallback
              className="specialist__portrait"
              fallback={prospect.assets.symbol}
              image={portrait}
            />
          ) : (
            <div
              aria-label={portrait?.alt ?? "Espaço reservado para foto do especialista"}
              className="specialist__photo-placeholder"
              role="img"
            >
              <span>{portrait?.alt ?? "SUA FOTO FICARIA AQUI"}</span>
            </div>
          )}
          {prospect.assets.specialistSignature?.src ? (
            <span className="specialist__brand-badge">
              <ImageWithFallback
                className="specialist__brand-mark"
                fallback={prospect.assets.logo}
                image={prospect.assets.specialistSignature}
                sizes="(min-width: 940px) 8rem, 24vw"
              />
            </span>
          ) : null}
        </div>
        <div className="specialist__details">
          <SpecialistStats prospect={prospect} />
          <div className="specialist__chips">
            {prospect.specialist.chips.map((chip, index) => (
              <Reveal key={chip.label} delay={index * 70}>
                <Chip
                  icon={chip.icon}
                  image={chip.image}
                  label={chip.label}
                  stars={chip.stars}
                />
              </Reveal>
            ))}
          </div>
          <div className="specialist__actions">
            <Button href={whatsappHref} icon="whatsapp" variant="whatsapp">
              Falar com {specialistFirstName}
            </Button>
            {prospect.contact.instagramUrl ? (
              <Button href={prospect.contact.instagramUrl} icon="instagram" variant="secondary">
                Conhecer Instagram
              </Button>
            ) : (
              <Button href="#inicio" icon="calendar" variant="secondary">
                Consulta rápida
              </Button>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
