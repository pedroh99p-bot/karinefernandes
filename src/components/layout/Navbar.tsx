import type { IconName, ResolvedProspect } from "@/prospects/types";
import { createWhatsAppHref } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { MobileMenu } from "./MobileMenu";

const navLinks: Array<{ href: string; label: string; icon: IconName }> = [
  { href: "#sobre", label: "Sobre", icon: "user" },
  { href: "#servicos", label: "Serviços", icon: "clipboard" },
  { href: "#especialista", label: "Especialista", icon: "user" },
  { href: "#como-funciona", label: "Como funciona", icon: "route" },
  { href: "#localizacao", label: "Localização", icon: "map" }
];

type NavbarProps = {
  prospect: ResolvedProspect;
};

export function Navbar({ prospect }: NavbarProps) {
  const whatsappHref = createWhatsAppHref(
    prospect.contact.whatsapp,
    prospect.contact.defaultMessage,
    { origin: "menu-desktop" }
  );

  return (
    <header className="navbar">
      <a className="navbar__brand" href={`/${prospect.slug}`} aria-label={`Início - ${prospect.business.name}`}>
        <ImageWithFallback
          className="navbar__logo"
          fallback={prospect.assets.logo}
          image={prospect.assets.logoLight ?? prospect.assets.logo}
          loading="eager"
        />
      </a>
      <nav aria-label="Navegação principal" className="navbar__links">
        {navLinks.slice(0, 4).map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <div className="navbar__actions">
        <Button
          className="navbar__whatsapp"
          href={whatsappHref}
          icon="whatsapp"
          variant="whatsapp"
        >
          Falar com Karine
        </Button>
        <MobileMenu links={navLinks} prospect={prospect} />
      </div>
    </header>
  );
}
