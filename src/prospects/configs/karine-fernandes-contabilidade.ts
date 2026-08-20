import type { ProspectConfigInput } from "../types";

const assetRoot = "/assets/karine-fernandes-contabilidade";

const logoAsset = {
  src: `${assetRoot}/logo.webp`,
  alt: "Logo Karine Fernandes Contabilidade",
  width: 741,
  height: 338,
  objectFit: "contain" as const,
  objectPosition: "center"
};

const preloaderLogoAsset = {
  src: `${assetRoot}/logo-monograma-2026.webp`,
  alt: "Logo Karine Fernandes Contabilidade em marrom e bege",
  width: 1024,
  height: 1024,
  objectFit: "contain" as const,
  objectPosition: "center"
};

const specialistAsset = {
  src: `${assetRoot}/karine-especialista-2026.webp`,
  alt: "Karine Fernandes em seu escritório de contabilidade",
  width: 2701,
  height: 3376,
  objectFit: "cover" as const,
  objectPosition: "center center"
};

const heroAsset = {
  src: `${assetRoot}/hero-karine-servicos.webp`,
  alt: "Karine Fernandes atendendo em seu escritório",
  width: 3024,
  height: 1898,
  objectFit: "cover" as const,
  objectPosition: "center center"
};

const googleAsset = {
  src: `${assetRoot}/google-icon.png`,
  alt: "Ícone do Google",
  width: 512,
  height: 512,
  objectFit: "contain" as const,
  objectPosition: "center"
};

const socialPreviewUrl =
  "https://res.cloudinary.com/dhbrxzt5a/image/upload/v1787261527/de69e9ae-12fb-4ce5-9ca0-a4f5bc971b2e_pq1hju.webp";

export const karineFernandesContabilidadeProspect = {
  slug: "karine-fernandes-contabilidade",
  status: "active",
  business: {
    name: "Karine Fernandes Contabilidade",
    category: "Escritório de contabilidade",
    description:
      "Abertura e contabilidade de empresas prestadoras de serviço no Simples Nacional, com atendimento digital, próximo e descomplicado.",
    legalNotice:
      "Os serviços, prazos, enquadramentos, tributos e deduções dependem da análise de cada caso, da documentação apresentada e da legislação aplicável."
  },
  specialist: {
    name: "Karine Fernandes",
    role: "Contadora para empresas de serviços no Simples Nacional",
    city: "Jacarepaguá, Rio de Janeiro",
    state: "RJ",
    description:
      "Mãe, esposa e especialista na área contábil com mais de 10 anos de experiência. Ajuda prestadores de serviço a abrir, organizar e acompanhar suas empresas com uma contabilidade leve, atenciosa e descomplicada.",
    signatureText: "Contabilidade para começar e crescer com clareza",
    chips: [
      { label: "Abertura de empresa de serviços", icon: "route" },
      { label: "Simples Nacional", icon: "badge-check" },
      { label: "Contabilidade mensal", icon: "clipboard" },
      { label: "Mais de 10 anos de experiência", icon: "calendar" },
    ]
  },
  contact: {
    whatsapp: "5521986281026",
    whatsappLabel: "(21) 98628-1026",
    phone: "5521986281026",
    phoneLabel: "(21) 98628-1026",
    email: "contadora.karine@gmail.com",
    instagram: "@contacomkarine",
    instagramUrl: "https://www.instagram.com/contacomkarine/",
    defaultMessage:
      "Olá, Karine! Vim pelo site e gostaria de orientação para abrir uma empresa de serviços ou organizar minha contabilidade no Simples Nacional."
  },
  location: {
    city: "Rio de Janeiro",
    state: "RJ",
    address: "Estr. dos Três Rios, 1305 - Jacarepaguá, Rio de Janeiro - RJ, 22745-004",
    region: "Jacarepaguá, Rio de Janeiro e atendimento digital",
    hours: ["Consulte o horário de atendimento pelo WhatsApp"],
    routeUrl:
      "https://www.google.com/maps/search/?api=1&query=Estr.%20dos%20Tr%C3%AAs%20Rios%2C%201305%20-%20Jacarepagu%C3%A1%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022745-004",
    mapEmbedUrl:
      "https://www.google.com/maps?q=Estr.%20dos%20Tr%C3%AAs%20Rios%2C%201305%20-%20Jacarepagu%C3%A1%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022745-004&output=embed"
  },
  assets: {
    logo: logoAsset,
    logoLight: logoAsset,
    logoDark: logoAsset,
    footerLogo: preloaderLogoAsset,
    symbol: preloaderLogoAsset,
    preloaderLogo: preloaderLogoAsset,
    favicon: `${assetRoot}/logo-monograma-2026.webp`,
    heroSpecialist: heroAsset,
    specialistPortrait: specialistAsset,
    specialistSignature: preloaderLogoAsset,
    socialPreview: socialPreviewUrl,
    backgroundTexture: `${assetRoot}/hero-karine-servicos.webp`,
    testimonialAvatars: [googleAsset],
    mapFallback: {
      ...logoAsset,
      alt: "Localização da Karine Fernandes Contabilidade em Jacarepaguá"
    }
  },
  services: [
    {
      id: "abertura-regularizacao-cnpj",
      title: "Abertura de empresa de serviços",
      shortDescription:
        "Orientação sobre atividade, documentos e abertura do CNPJ, com análise do enquadramento aplicável ao Simples Nacional.",
      icon: "badge-check",
      enabled: true,
      whatsappMessage: "Quero orientação para abrir minha empresa de serviços no Simples Nacional."
    },
    {
      id: "contabilidade-mei-empresas",
      title: "Contabilidade para empresas do Simples Nacional",
      shortDescription:
        "Acompanhamento contábil mensal para organizar impostos, documentos e obrigações da empresa prestadora de serviços.",
      icon: "clipboard",
      enabled: true,
      whatsappMessage: "Quero conhecer a contabilidade mensal para minha empresa de serviços."
    },
    {
      id: "obrigacoes-fiscais",
      title: "Gestão de obrigações fiscais",
      shortDescription:
        "Organização das obrigações e tributos conforme a atividade, o regime tributário e a realidade do negócio.",
      icon: "calendar",
      enabled: true,
      whatsappMessage: "Quero orientação sobre as obrigações fiscais da minha empresa."
    },
    {
      id: "imposto-renda",
      title: "Imposto de Renda PJ e PF",
      shortDescription:
        "Consultoria para organizar a declaração, conferir informações e identificar as deduções aplicáveis ao caso.",
      icon: "document",
      enabled: true,
      whatsappMessage: "Quero orientação sobre Imposto de Renda PJ ou PF."
    }
  ],
  benefits: [
    {
      title: "Abertura com orientação",
      description:
        "Atividade, documentos e enquadramento são analisados antes da abertura do CNPJ.",
      icon: "badge-check"
    },
    {
      title: "Rotina no Simples Nacional",
      description:
        "A empresa recebe acompanhamento contábil de acordo com as obrigações aplicáveis à sua atividade.",
      icon: "clipboard"
    },
    {
      title: "Atendimento próximo",
      description:
        "Espaço para tirar dúvidas e entender os próximos passos em linguagem simples.",
      icon: "user"
    },
    {
      title: "Organização fiscal",
      description:
        "Documentos, tributos e compromissos recorrentes ficam mais fáceis de acompanhar.",
      icon: "calendar"
    },
    {
      title: "Contato pelo WhatsApp",
      description:
        "Envie sua necessidade e receba uma orientação inicial no canal que você já utiliza.",
      icon: "whatsapp"
    }
  ],
  process: [
    {
      title: "Você apresenta sua atividade",
      description:
        "Conte pelo WhatsApp qual serviço pretende prestar e em que momento está o seu negócio.",
      icon: "message"
    },
    {
      title: "O cenário é analisado",
      description:
        "O atendimento verifica atividade, documentos e possibilidades de enquadramento aplicáveis.",
      icon: "user"
    },
    {
      title: "A abertura é organizada",
      description:
        "Você recebe orientação sobre os dados e documentos necessários para iniciar o processo do CNPJ.",
      icon: "clipboard"
    },
    {
      title: "A contabilidade segue com você",
      description:
        "Após a abertura, o acompanhamento mensal organiza as obrigações contábeis e fiscais da empresa.",
      icon: "route"
    }
  ],
  proof: {
    enabled: true,
    rating: 5,
    reviewCount: 61,
    clientsServed: null,
    yearsExperience: 10,
    sourceLabel: "Avaliações no Google"
  },
  testimonials: {
    enabled: true,
    autoplay: true,
    speedSeconds: 76,
    items: [
      {
        name: "Patricia Taveira",
        text:
          "Super recomendo a Karine! Me ajudou bastante: atenciosa, profissional, organizada, preço justo e dentro do prazo. Pode confiar! Obrigada, Karine, mais uma vez!",
        rating: 5,
        service: "Há um mês",
        source: "Google",
        sourceUrl: null,
        avatar: null,
        isPlaceholder: false
      },
      {
        name: "Ligia Fernandes",
        text:
          "Karine é uma profissional excepcional, experiente, competente, atenciosa, sempre pronta para tirar dúvidas, muito paciente. Recomendo muito!",
        rating: 5,
        service: "Há 4 meses",
        source: "Google",
        sourceUrl: null,
        avatar: null,
        isPlaceholder: false
      },
      {
        name: "Caio Gomes",
        text:
          "Profissional de alto nível. Executou minha demanda com excelência, mesmo sob um prazo reduzido, e demonstrou grande prestatividade ao explicar detalhadamente todas as circunstâncias do trabalho realizado. Recomendo fortemente.",
        rating: 5,
        service: "Há 3 meses",
        source: "Google",
        sourceUrl: null,
        avatar: null,
        isPlaceholder: false
      },
      {
        name: "Anelise Machado",
        text:
          "Profissional dedicada, proativa, sempre lembrando os clientes de suas obrigações e dando dicas e, acima de tudo, de confiança, algo difícil de achar hoje! Recomendo muito!",
        rating: 5,
        service: "Há 5 meses",
        source: "Google",
        sourceUrl: null,
        avatar: null,
        isPlaceholder: false
      },
      {
        name: "Michelle Barbosa",
        text:
          "Contratei os serviços da Contadora Karine para gerenciar a contabilidade da minha empresa e estou muito satisfeita com o resultado. Karine sempre atende com muita eficiência e cordialidade.",
        rating: 5,
        service: "Serviço impecável e atencioso · há 3 meses",
        source: "Google",
        sourceUrl: null,
        avatar: null,
        isPlaceholder: false
      },
      {
        name: "Júlia Antonia Oliveira Silva",
        text:
          "Karine é uma excelente profissional! Atualizada, comprometida, responsável, sempre disposta para dúvidas e o retorno do serviço é impecável, o que me deixa bem satisfeita e tranquila. Recomendo muito!",
        rating: 5,
        service: "Há 5 meses",
        source: "Google",
        sourceUrl: null,
        avatar: null,
        isPlaceholder: false
      },
      {
        name: "Graziela Loureiro",
        text:
          "Karine é uma excelente profissional, muito competente. Muito organizada, atenta aos prazos, profissional atualizada, super recomendo.",
        rating: 5,
        service: "Há 5 meses",
        source: "Google",
        sourceUrl: null,
        avatar: null,
        isPlaceholder: false
      },
      {
        name: "Danielle Ferreira",
        text:
          "Karine é uma fofa e uma excelente profissional. Recomendo para quem ainda não fez o seu Imposto de Renda: faça com ela.",
        rating: 5,
        service: "Há 4 meses",
        source: "Google",
        sourceUrl: null,
        avatar: null,
        isPlaceholder: false
      }
    ]
  },
  whatsappGroup: {
    enabled: false
  },
  quickConsult: {
    identifierField: "name",
    identifierLabel: "Nome",
    identifierPlaceholder: "Como podemos chamar você?"
  },
  differentialsSpotlight: {
    enabled: true,
    eyebrow: "Serviço principal",
    headline: {
      before: "Da abertura do CNPJ à contabilidade mensal da sua",
      highlight: "empresa de serviços",
      after: "",
      variant: "glow"
    },
    description:
      "Um atendimento pensado para prestadores de serviço que querem começar e manter a empresa organizada no Simples Nacional.",
    items: [
      {
        title: "Abertura orientada",
        description:
          "Análise da atividade, organização dos documentos e orientação para a abertura do CNPJ.",
        icon: "badge-check"
      },
      {
        title: "Simples Nacional",
        description:
          "Avaliação do enquadramento e das obrigações aplicáveis à empresa prestadora de serviços.",
        icon: "clipboard"
      },
      {
        title: "Contabilidade mensal",
        description:
          "Acompanhamento de tributos, documentos e rotinas contábeis depois da abertura.",
        icon: "calendar"
      }
    ],
    ctaLabel: "Quero abrir minha empresa",
    whatsappMessage:
      "Quero abrir uma empresa de serviços e entender a contabilidade no Simples Nacional."
  },
  rollers: {
    authority: {
      enabled: true,
      speedSeconds: 30,
      direction: "left",
      items: [
        { label: "Abertura de empresa de serviços", icon: "route" },
        { label: "Contabilidade no Simples Nacional", icon: "badge-check" },
        { label: "Acompanhamento contábil mensal", icon: "clipboard" },
        { label: "Atendimento digital e próximo", icon: "whatsapp" },
        { label: "Jacarepaguá • Rio de Janeiro", icon: "map" },
        { label: "5,0 no Google", icon: "star", requiresProof: true },
        { label: "61 avaliações", icon: "message", requiresProof: true },
        { label: "10+ anos de experiência", icon: "calendar", requiresProof: true }
      ]
    },
    transition: {
      enabled: true,
      speedSeconds: 34,
      direction: "right",
      items: [
        { label: "Do CNPJ à rotina mensal", icon: "spark" },
        { label: "Obrigações fiscais organizadas", icon: "clipboard" },
        { label: "Orientação em linguagem simples", icon: "user" },
        { label: "Atendimento pelo WhatsApp", icon: "whatsapp" }
      ]
    }
  },
  theme: {
    preset: "black-copper",
    pageBackground: "#160e0a",
    sectionDark: "#1d120d",
    sectionDeep: "#291910",
    sectionMedium: "#432a1d",
    sectionSoft: "#e8d7c4",
    sectionLight: "#fbf5ec",
    primary: "#b87948",
    primaryStrong: "#7a4428",
    primarySoft: "#e0bc91",
    primaryForeground: "#1c100a",
    secondary: "#9a6a4d",
    accent: "#cf9a62",
    background: "#160e0a",
    backgroundSoft: "#21140e",
    surface: "#2a1a12",
    surfaceElevated: "#3a2418",
    text: "#fff8ef",
    textInverse: "#2a1a12",
    muted: "#dcc8b5",
    border: "rgba(207, 154, 98, 0.30)",
    borderSoft: "rgba(122, 68, 40, 0.20)",
    success: "#b87948",
    whatsapp: "#c58a54",
    glowRgb: "184, 121, 72",
    radiusSmall: "0.7rem",
    radiusMedium: "1.2rem",
    radiusLarge: "2rem",
    shadowCard: "0 24px 76px rgba(44, 24, 14, 0.38)",
    shadowGlow: "0 0 52px rgba(184, 121, 72, 0.24)"
  },
  typography: {
    headingPreset: "premium",
    bodyPreset: "system",
    labelPreset: "montserrat",
    accentPreset: "display"
  },
  copy: {
    preset: "documental",
    heroEyebrow: "Contabilidade para prestadores de serviço",
    heroHeadline: {
      before: "Empresa de serviços",
      highlight: "no Simples Nacional",
      after: "",
      variant: "glow"
    },
    heroSubtitle:
      "Abertura de CNPJ e contabilidade mensal para prestadores de serviço, com orientação próxima do início às obrigações do dia a dia.",
    heroPrimaryCta: "Quero abrir minha empresa",
    heroSecondaryCta: "Conhecer soluções",
    servicesHeadline: {
      before: "Soluções para abrir e manter sua empresa de serviços",
      highlight: "organizada",
      after: "",
      variant: "glow"
    },
    servicesSubtitle:
      "Comece pela abertura do CNPJ, siga com a contabilidade mensal ou encontre o apoio contábil mais adequado ao seu momento.",
    specialistEyebrow: "Quem é Karine",
    specialistHeadline: {
      before: "Experiência contábil para orientar sua empresa com",
      highlight: "clareza e proximidade",
      after: "",
      variant: "glow"
    },
    benefitsEyebrow: "Por que escolher",
    benefitsHeadline: {
      before: "Acompanhamento contábil para sua empresa começar com mais",
      highlight: "clareza",
      after: "",
      variant: "glow"
    },
    processEyebrow: "Como funciona",
    processHeadline: {
      before: "Da análise da atividade à rotina contábil da",
      highlight: "sua empresa",
      after: "",
      variant: "underline-reveal"
    },
    testimonialsEyebrow: "Depoimentos no Google",
    testimonialsHeadline: {
      before: "Atendimento reconhecido por quem confia na",
      highlight: "Karine Fernandes",
      after: "",
      variant: "glow"
    },
    locationEyebrow: "Onde encontrar",
    locationHeadline: {
      before: "Escritório em",
      highlight: "Jacarepaguá, Rio de Janeiro",
      after: "",
      variant: "glow"
    },
    finalEyebrow: "Cuide do seu negócio",
    finalHeadline: {
      before: "Abra sua empresa de serviços e mantenha a contabilidade",
      highlight: "organizada desde o início",
      after: "",
      variant: "glow"
    },
    finalSubtitle:
      "Conte qual atividade pretende exercer e receba uma orientação inicial sobre abertura e contabilidade no Simples Nacional.",
    finalBenefits: [
      "Abertura de empresa de serviços",
      "Contabilidade mensal no Simples Nacional",
      "Atendimento direto pelo WhatsApp"
    ],
    footerDescription:
      "Karine Fernandes Contabilidade: abertura e acompanhamento contábil para empresas prestadoras de serviço no Simples Nacional, com atendimento em Jacarepaguá e também digital."
  },
  layout: {
    heroVariant: "specialist-background",
    heroBackgroundPositionMobile: "48% top",
    heroBackgroundPositionDesktop: "center center",
    servicesVariant: "carousel",
    servicesTone: "light",
    contentTone: "light",
    showBottomMobileCta: false
  },
  animations: {
    enabled: true,
    revealOnce: true,
    highlightVariant: "glow"
  },
  preloader: {
    enabled: true,
    variant: "curtain",
    duration: 1350,
    showOncePerSession: false
  },
  chatbot: {
    enabled: true,
    title: "Abertura e contabilidade",
    greeting:
      "Olá! Posso ajudar você a identificar o próximo passo para abrir ou organizar sua empresa de serviços.",
    disclaimer:
      "As respostas são orientativas. O atendimento depende da análise das informações, documentos e da legislação aplicável.",
    position: "bottom-right",
    showAfterSeconds: 3,
    quickReplies: [
      {
        id: "abrir-cnpj",
        label: "Quero abrir uma empresa de serviços",
        icon: "badge-check",
        response:
          "A abertura começa pela análise da atividade, dos documentos e do enquadramento aplicável ao negócio.",
        relatedServiceId: "abertura-regularizacao-cnpj",
        whatsappMessage: "Quero orientação para abrir minha empresa de serviços no Simples Nacional."
      },
      {
        id: "contabilidade-simples",
        label: "Já tenho empresa e preciso de contabilidade",
        icon: "clipboard",
        response:
          "O atendimento pode organizar a rotina contábil, os tributos e as obrigações aplicáveis à empresa.",
        relatedServiceId: "contabilidade-mei-empresas",
        whatsappMessage: "Quero conhecer a contabilidade mensal para minha empresa de serviços."
      },
      {
        id: "regularizar-cnpj",
        label: "Preciso regularizar meu CNPJ",
        icon: "route",
        response:
          "É importante identificar a situação cadastral e as obrigações pendentes antes de definir os próximos passos.",
        relatedServiceId: "abertura-regularizacao-cnpj",
        whatsappMessage: "Quero orientação para regularizar meu CNPJ."
      },
      {
        id: "obrigacoes-fiscais",
        label: "Tenho dúvidas sobre INSS, ISS ou Carnê-Leão",
        icon: "calendar",
        response:
          "Essas obrigações precisam ser organizadas conforme a atividade e as informações de cada profissional.",
        relatedServiceId: "obrigacoes-fiscais",
        whatsappMessage: "Quero orientação sobre INSS, ISS ou Carnê-Leão."
      },
      {
        id: "imposto-renda",
        label: "Preciso declarar Imposto de Renda",
        icon: "document",
        response:
          "O atendimento pode ajudar a organizar informações, conferir a declaração e identificar deduções aplicáveis ao caso.",
        relatedServiceId: "imposto-renda",
        whatsappMessage: "Quero orientação sobre Imposto de Renda PJ ou PF."
      },
      {
        id: "falar-karine",
        label: "Quero falar com Karine",
        icon: "whatsapp",
        response:
          "Perfeito. Continue pelo WhatsApp e envie um breve resumo do que você precisa organizar.",
        relatedServiceId: null,
        whatsappMessage: "Quero falar com a Karine sobre uma necessidade contábil."
      }
    ]
  },
  seo: {
    title: "Abertura de Empresa de Serviços no Simples Nacional | Karine Fernandes",
    description:
      "Abertura de CNPJ e contabilidade mensal para empresas prestadoras de serviço no Simples Nacional, com atendimento de Karine Fernandes no Rio de Janeiro e online.",
    canonical: null,
    allowIndexing: false
  },
  tracking: {
    googleAnalyticsId: "G-CT3HD17CRB",
    googleTagManagerId: "GTM-P82NFJ87",
    metaPixelId: null
  }
} satisfies ProspectConfigInput;
