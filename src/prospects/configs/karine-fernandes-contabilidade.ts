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
  src: `${assetRoot}/preloader-logo.webp`,
  alt: "Monograma Karine Fernandes Contabilidade",
  width: 1080,
  height: 1080,
  objectFit: "contain" as const,
  objectPosition: "center"
};

const specialistAsset = {
  src: `${assetRoot}/specialist.webp`,
  alt: "Karine Fernandes, especialista em contabilidade digital",
  width: 1122,
  height: 1402,
  objectFit: "cover" as const,
  objectPosition: "center top"
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
  "https://res.cloudinary.com/dhbrxzt5a/image/upload/v1786208020/a9ab6ce8-21e3-48f2-8b76-fa9560700ceb_xnxdnr.png";

export const karineFernandesContabilidadeProspect = {
  slug: "karine-fernandes-contabilidade",
  status: "active",
  business: {
    name: "Karine Fernandes Contabilidade",
    category: "Escritório de contabilidade",
    description:
      "Contabilidade digital em Jacarepaguá para MEI, autônomos e pequenas empresas, com atendimento leve, atencioso e descomplicado.",
    legalNotice:
      "Os serviços, prazos, enquadramentos, tributos e deduções dependem da análise de cada caso, da documentação apresentada e da legislação aplicável."
  },
  specialist: {
    name: "Karine Fernandes",
    role: "Especialista em contabilidade digital",
    city: "Jacarepaguá, Rio de Janeiro",
    state: "RJ",
    description:
      "Mãe, esposa e especialista na área contábil com mais de 10 anos de experiência. Ajuda microempreendedores, autônomos e pequenas empresas a prosperarem por meio de uma contabilidade leve, atenciosa e descomplicada.",
    signatureText: "Contabilidade leve para você prosperar",
    chips: [
      { label: "Contabilidade digital", icon: "document" },
      { label: "MEI, autônomos e pequenas empresas", icon: "user" },
      { label: "Mais de 10 anos de experiência", icon: "calendar" },
      { label: "Atendimento leve e descomplicado", icon: "spark" }
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
      "Olá, Karine! Vim pelo site e gostaria de receber uma orientação inicial sobre contabilidade."
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
    symbol: preloaderLogoAsset,
    preloaderLogo: preloaderLogoAsset,
    favicon: `${assetRoot}/preloader-logo.webp`,
    heroSpecialist: specialistAsset,
    specialistPortrait: specialistAsset,
    specialistSignature: null,
    socialPreview: socialPreviewUrl,
    backgroundTexture: `${assetRoot}/hero-background.webp`,
    testimonialAvatars: [googleAsset],
    mapFallback: {
      ...logoAsset,
      alt: "Localização da Karine Fernandes Contabilidade em Jacarepaguá"
    }
  },
  services: [
    {
      id: "imposto-renda",
      title: "Imposto de Renda PJ e PF",
      shortDescription:
        "Consultoria para organizar a declaração, conferir informações e identificar as deduções aplicáveis ao seu caso.",
      icon: "document",
      enabled: true,
      whatsappMessage: "Quero orientação sobre Imposto de Renda PJ ou PF."
    },
    {
      id: "abertura-regularizacao-cnpj",
      title: "Abertura e regularização de CNPJ",
      shortDescription:
        "Suporte para iniciar um negócio ou ajustar a documentação e a situação cadastral da empresa.",
      icon: "badge-check",
      enabled: true,
      whatsappMessage: "Quero orientação para abrir ou regularizar um CNPJ."
    },
    {
      id: "contabilidade-mei-empresas",
      title: "Contabilidade para MEI e empresas",
      shortDescription:
        "Regularização, organização financeira e apuração de impostos para manter o negócio em ordem.",
      icon: "clipboard",
      enabled: true,
      whatsappMessage: "Quero conhecer o atendimento contábil para MEI ou empresa."
    },
    {
      id: "obrigacoes-fiscais",
      title: "Gestão de obrigações fiscais",
      shortDescription:
        "Organização e cumprimento de obrigações como INSS, ISS e Carnê-Leão para profissionais autônomos.",
      icon: "calendar",
      enabled: true,
      whatsappMessage: "Quero orientação sobre minhas obrigações fiscais."
    }
  ],
  benefits: [
    {
      title: "Contabilidade descomplicada",
      description:
        "Orientações claras para você entender as obrigações e tomar decisões com mais segurança.",
      icon: "badge-check"
    },
    {
      title: "Atendimento atencioso",
      description:
        "Espaço para tirar dúvidas e organizar cada demanda de acordo com a realidade do negócio.",
      icon: "user"
    },
    {
      title: "Organização financeira",
      description:
        "Apoio para manter informações, documentos e compromissos fiscais mais bem estruturados.",
      icon: "clipboard"
    },
    {
      title: "Soluções práticas",
      description:
        "Burocracias são traduzidas em próximos passos possíveis e fáceis de acompanhar.",
      icon: "route"
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
      title: "Você conta o que precisa",
      description:
        "Explique pelo WhatsApp a situação da sua empresa, atividade ou declaração.",
      icon: "message"
    },
    {
      title: "A necessidade é analisada",
      description:
        "O atendimento identifica o serviço contábil mais adequado ao seu momento.",
      icon: "user"
    },
    {
      title: "As informações são organizadas",
      description:
        "Você recebe orientação sobre documentos, dados e obrigações que precisam ser conferidos.",
      icon: "clipboard"
    },
    {
      title: "Os próximos passos ficam claros",
      description:
        "O acompanhamento segue pelo WhatsApp conforme a análise e a legislação aplicável.",
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
    eyebrow: "Por que escolher",
    headline: {
      before: "Contabilidade para cuidar do seu negócio com mais",
      highlight: "leveza e clareza",
      after: "",
      variant: "glow"
    },
    description:
      "Três compromissos que transformam burocracias em uma rotina contábil mais fácil de acompanhar.",
    items: [
      {
        title: "Clareza nas orientações",
        description:
          "Obrigações, documentos e próximos passos são explicados em linguagem simples.",
        icon: "badge-check"
      },
      {
        title: "Cuidado com os detalhes",
        description:
          "Cada demanda é conferida de acordo com as informações apresentadas e a legislação aplicável.",
        icon: "clipboard"
      },
      {
        title: "Atendimento próximo",
        description:
          "Você conversa diretamente com Karine para organizar dúvidas e necessidades do negócio.",
        icon: "whatsapp"
      }
    ],
    ctaLabel: "Falar com Karine",
    whatsappMessage:
      "Quero falar com a Karine e receber uma orientação inicial sobre contabilidade."
  },
  rollers: {
    authority: {
      enabled: true,
      speedSeconds: 30,
      direction: "left",
      items: [
        { label: "Contabilidade digital", icon: "document" },
        { label: "Simples Nacional e MEI", icon: "badge-check" },
        { label: "Imposto de Renda PJ e PF", icon: "clipboard" },
        { label: "Abertura e regularização de CNPJ", icon: "route" },
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
        { label: "Contabilidade leve", icon: "spark" },
        { label: "Gestão fiscal organizada", icon: "clipboard" },
        { label: "Atendimento atencioso", icon: "user" },
        { label: "Orientação pelo WhatsApp", icon: "whatsapp" }
      ]
    }
  },
  theme: {
    preset: "black-copper",
    pageBackground: "#17110e",
    sectionDark: "#1c1410",
    sectionDeep: "#261a14",
    sectionMedium: "#38281e",
    sectionSoft: "#e9dbc8",
    sectionLight: "#f6eee3",
    primary: "#d5a52f",
    primaryStrong: "#a77412",
    primarySoft: "#f0d487",
    primaryForeground: "#1a1209",
    secondary: "#b69a7b",
    accent: "#e2bb55",
    background: "#17110e",
    backgroundSoft: "#211711",
    surface: "#2a1e17",
    surfaceElevated: "#3b2a20",
    text: "#fffaf2",
    textInverse: "#241a15",
    muted: "#d8c9b9",
    border: "rgba(226, 187, 85, 0.26)",
    borderSoft: "rgba(110, 77, 32, 0.20)",
    success: "#d5a52f",
    whatsapp: "#d5a52f",
    glowRgb: "213, 165, 47",
    radiusSmall: "0.7rem",
    radiusMedium: "1.2rem",
    radiusLarge: "2rem",
    shadowCard: "0 24px 76px rgba(45, 28, 17, 0.34)",
    shadowGlow: "0 0 52px rgba(213, 165, 47, 0.25)"
  },
  typography: {
    headingPreset: "premium",
    bodyPreset: "system",
    labelPreset: "montserrat",
    accentPreset: "display"
  },
  copy: {
    preset: "documental",
    heroEyebrow: "Contabilidade digital em Jacarepaguá",
    heroHeadline: {
      before: "Contabilidade leve para o seu negócio",
      highlight: "prosperar sem complicação",
      after: "",
      variant: "glow"
    },
    heroSubtitle:
      "Atendimento contábil atencioso para microempreendedores, autônomos e pequenas empresas organizarem suas obrigações com mais tranquilidade.",
    heroPrimaryCta: "Falar com Karine no WhatsApp",
    heroSecondaryCta: "Conhecer serviços",
    servicesHeadline: {
      before: "Soluções contábeis para cuidar de cada fase do",
      highlight: "seu negócio",
      after: "",
      variant: "glow"
    },
    servicesSubtitle:
      "Escolha o serviço mais próximo da sua necessidade ou fale com Karine para receber uma orientação inicial.",
    specialistEyebrow: "Quem é Karine",
    specialistHeadline: {
      before: "Mais de 10 anos tornando a contabilidade",
      highlight: "leve e descomplicada",
      after: "",
      variant: "glow"
    },
    benefitsEyebrow: "Por que escolher",
    benefitsHeadline: {
      before: "Uma parceria contábil para trazer mais",
      highlight: "tranquilidade ao negócio",
      after: "",
      variant: "glow"
    },
    processEyebrow: "Como funciona",
    processHeadline: {
      before: "Da primeira conversa à organização dos",
      highlight: "próximos passos",
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
      before: "Envie sua necessidade e dê o primeiro passo para uma contabilidade mais",
      highlight: "simples e organizada",
      after: "",
      variant: "glow"
    },
    finalSubtitle:
      "Conte o que precisa organizar e receba uma orientação inicial sobre o atendimento contábil.",
    finalBenefits: [
      "Atendimento para MEI e empresas",
      "Imposto de Renda PJ e PF",
      "Obrigações fiscais e CNPJ"
    ],
    footerDescription:
      "Karine Fernandes Contabilidade: atendimento digital, leve e descomplicado para MEI, autônomos e pequenas empresas em Jacarepaguá e região."
  },
  layout: {
    heroVariant: "specialist-background",
    heroBackgroundPositionMobile: "69% top",
    heroBackgroundPositionDesktop: "center top",
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
    title: "Orientação contábil",
    greeting:
      "Olá! Posso ajudar você a identificar qual serviço contábil está mais próximo da sua necessidade.",
    disclaimer:
      "As respostas são orientativas. O atendimento depende da análise das informações, documentos e da legislação aplicável.",
    position: "bottom-right",
    showAfterSeconds: 3,
    quickReplies: [
      {
        id: "imposto-renda",
        label: "Preciso declarar Imposto de Renda",
        icon: "document",
        response:
          "O atendimento pode ajudar a organizar informações, conferir a declaração e identificar deduções aplicáveis ao seu caso.",
        relatedServiceId: "imposto-renda",
        whatsappMessage: "Quero orientação sobre Imposto de Renda PJ ou PF."
      },
      {
        id: "abrir-cnpj",
        label: "Quero abrir um CNPJ",
        icon: "badge-check",
        response:
          "A abertura começa pela análise da atividade e das informações necessárias para o cadastro do negócio.",
        relatedServiceId: "abertura-regularizacao-cnpj",
        whatsappMessage: "Quero orientação para abrir um CNPJ."
      },
      {
        id: "regularizar-cnpj",
        label: "Preciso regularizar meu CNPJ",
        icon: "clipboard",
        response:
          "É importante identificar a situação cadastral e as obrigações pendentes antes de definir os próximos passos.",
        relatedServiceId: "abertura-regularizacao-cnpj",
        whatsappMessage: "Quero orientação para regularizar meu CNPJ."
      },
      {
        id: "contabilidade-mei",
        label: "Sou MEI ou tenho uma empresa",
        icon: "user",
        response:
          "O atendimento contábil pode apoiar a organização financeira, a apuração de impostos e as obrigações do negócio.",
        relatedServiceId: "contabilidade-mei-empresas",
        whatsappMessage: "Quero conhecer o atendimento contábil para MEI ou empresa."
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
    title: "Karine Fernandes Contabilidade | MEI e Simples Nacional no RJ",
    description:
      "Contabilidade digital em Jacarepaguá para MEI, autônomos e pequenas empresas. Imposto de Renda, CNPJ, organização fiscal e atendimento com Karine Fernandes.",
    canonical: null,
    allowIndexing: false
  },
  tracking: {
    googleAnalyticsId: "G-CT3HD17CRB",
    googleTagManagerId: "GTM-P82NFJ87",
    metaPixelId: null
  }
} satisfies ProspectConfigInput;
