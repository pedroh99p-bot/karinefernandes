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
  src: `${assetRoot}/karine-especialista-perfil.webp`,
  alt: "Karine Fernandes em seu escritório, durante atendimento contábil",
  width: 1088,
  height: 1450,
  objectFit: "cover" as const,
  objectPosition: "center top"
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

const socialPreviewUrl = `${assetRoot}/social-preview-karine-2026.webp`;

export const karineFernandesContabilidadeProspect = {
  slug: "karine-fernandes-contabilidade",
  status: "client",
  business: {
    name: "Karine Fernandes Contabilidade",
    category: "Escritório de contabilidade",
    description:
      "Abertura e contabilidade de empresas de serviços no Simples Nacional como especialidade, com suporte contábil também para MEI, autônomos e Imposto de Renda.",
    legalNotice:
      "Os serviços, prazos, enquadramentos, tributos e deduções dependem da análise de cada caso, da documentação apresentada e da legislação aplicável."
  },
  specialist: {
    name: "Karine Fernandes",
    role: "Contadora",
    city: "Jacarepaguá, Rio de Janeiro",
    state: "RJ",
    description:
      "Contabilidade próxima, clara e responsável para você cuidar do seu negócio e das suas obrigações com mais segurança.",
    signatureText: "Contabilidade para começar e crescer com clareza",
    chips: [
      { label: "5,0 no Google", icon: "star", image: googleAsset, stars: 5 },
      { label: "Contabilidade mensal", icon: "clipboard" },
      { label: "MEI e autônomos", icon: "user" },
      { label: "Imposto de Renda", icon: "document" }
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
      "Olá, Karine! Vim pelo site e gostaria de orientação sobre abertura de empresa, contabilidade, MEI, trabalho autônomo ou Imposto de Renda."
  },
  location: {
    city: "Rio de Janeiro",
    state: "RJ",
    address: "Estr. dos Três Rios, 1305 - Jacarepaguá, Rio de Janeiro - RJ, 22745-004",
    region: "Atendimento presencial em Jacarepaguá e remoto para clientes de todo o Brasil",
    hours: ["Consulte o horário de atendimento pelo WhatsApp"],
    routeUrl:
      "https://www.google.com/maps/search/?api=1&query=Estr.%20dos%20Tr%C3%AAs%20Rios%2C%201305%20-%20Jacarepagu%C3%A1%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022745-004",
    mapEmbedUrl:
      "https://www.google.com/maps?q=Estr.%20dos%20Tr%C3%AAs%20Rios%2C%201305%20-%20Jacarepagu%C3%A1%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022745-004&output=embed",
    postalAddress: {
      streetAddress: "Estrada dos Três Rios, 1305",
      addressLocality: "Rio de Janeiro",
      addressRegion: "RJ",
      postalCode: "22745-004",
      addressCountry: "BR"
    }
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
      id: "regularizacao-empresas",
      title: "Regularização de empresas",
      shortDescription:
        "Análise de pendências e orientação para regularizar o CNPJ, os dados cadastrais e as obrigações da empresa.",
      icon: "shield",
      enabled: true,
      whatsappMessage: "Quero orientação para regularizar minha empresa e colocar as pendências em dia."
    },
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
      title: "Contabilidade para MEI e empresas",
      shortDescription:
        "Acompanhamento mensal para organizar impostos, documentos e obrigações de MEI e empresas do Simples Nacional.",
      icon: "clipboard",
      enabled: true,
      whatsappMessage: "Quero conhecer a contabilidade mensal para minha empresa de serviços."
    },
    {
      id: "obrigacoes-fiscais",
      title: "Autônomos e obrigações fiscais",
      shortDescription:
        "Orientação sobre INSS, ISS, Carnê-Leão e outras obrigações ligadas à atividade profissional.",
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
      title: "Atendimento próximo",
      description:
        "Contato humano para entender sua realidade e orientar cada necessidade.",
      icon: "user"
    },
    {
      title: "Comunicação simples",
      description:
        "Explicações claras para tornar a contabilidade mais fácil de acompanhar.",
      icon: "message"
    },
    {
      title: "Segurança e responsabilidade",
      description:
        "Cuidado com documentos, informações e obrigações conforme cada caso.",
      icon: "shield"
    }
  ],
  process: [
    {
      title: "Você conta seu momento",
      description:
        "Explique pelo WhatsApp se precisa abrir, organizar ou regularizar uma atividade, empresa ou declaração.",
      icon: "message"
    },
    {
      title: "A necessidade é analisada",
      description:
        "O atendimento identifica o serviço contábil e os próximos passos mais adequados ao caso.",
      icon: "user"
    },
    {
      title: "As informações são organizadas",
      description:
        "Você recebe orientação sobre documentos, dados e obrigações que precisam ser conferidos.",
      icon: "clipboard"
    },
    {
      title: "O acompanhamento continua",
      description:
        "O atendimento segue de acordo com a demanda, a documentação e a rotina contábil necessária.",
      icon: "route"
    }
  ],
  proof: {
    enabled: true,
    rating: 5,
    reviewCount: 61,
    clientsServed: null,
    yearsExperience: 10,
    sourceLabel: "Avaliações no Google",
    sourceLogo: googleAsset,
    starCount: 5
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
  aboutSpotlight: {
    enabled: true,
    eyebrow: "Sobre a Karine",
    headline: {
      before: "Além dos",
      highlight: "números",
      after: "",
      variant: "glow"
    },
    description: "Um atendimento contábil mais próximo, simples e humano.",
    portrait: specialistAsset,
    quoteParagraphs: [
      "Sou mãe de 2 meninos e acredito em uma contabilidade feita com proximidade, escuta e clareza.",
      "Gosto de entender a realidade de cada cliente para oferecer um suporte mais humano, prático e seguro."
    ],
    items: [
      {
        title: "Atendimento presencial ou remoto",
        description: "Flexibilidade para atender você presencialmente ou de forma remota, em todo o Brasil.",
        icon: "map",
        ctaLabel: "Quero atendimento",
        whatsappMessage: "Quero entender como funciona o atendimento presencial ou remoto."
      },
      {
        title: "Contato direto com a Karine",
        description: "Mais proximidade, confiança e menos burocracia durante o atendimento.",
        icon: "user",
        ctaLabel: "Falar com Karine",
        whatsappMessage: "Quero falar diretamente com a Karine sobre minha necessidade contábil."
      },
      {
        title: "Atendimento ágil",
        description: "Respostas claras e acompanhamento próximo em cada etapa.",
        icon: "clock",
        ctaLabel: "Iniciar atendimento",
        whatsappMessage: "Quero iniciar um atendimento contábil com a Karine."
      }
    ]
  },
  differentialsSpotlight: {
    enabled: true,
    eyebrow: "Carro-chefe",
    headline: {
      before: "Abertura e contabilidade para empresas de serviços",
      highlight: "no Simples Nacional",
      after: "",
      variant: "glow"
    },
    description:
      "A principal especialidade da Karine, sem limitar o atendimento a outras necessidades de MEI, autônomos e pessoas físicas.",
    items: [
      {
        title: "Abertura orientada",
        description:
          "Análise da atividade, organização dos documentos e orientação para a abertura do CNPJ.",
        icon: "badge-check"
      },
      {
        title: "Rotina contábil no Simples",
        description:
          "Acompanhamento de impostos, documentos e obrigações da empresa prestadora de serviços.",
        icon: "clipboard"
      },
      {
        title: "Outras demandas contábeis",
        description:
          "Suporte para MEI, autônomos, regularizações, obrigações fiscais e Imposto de Renda.",
        icon: "document"
      }
    ],
    ctaLabel: "Quero entender meu atendimento",
    whatsappMessage:
      "Quero explicar minha necessidade e entender qual atendimento contábil é mais adequado."
  },
  faq: {
    enabled: true,
    eyebrow: "Dúvidas frequentes",
    headline: {
      before: "Contabilidade para decidir com mais",
      highlight: "clareza",
      after: "",
      variant: "underline-reveal"
    },
    description:
      "Respostas iniciais sobre abertura, regularização e acompanhamento contábil. Cada caso é confirmado após análise.",
    items: [
      {
        question: "A Karine faz abertura de empresa de serviços no Simples Nacional?",
        answer:
          "Sim. O atendimento inclui orientação sobre atividade, documentos, abertura do CNPJ e análise do enquadramento aplicável. A opção pelo Simples Nacional depende das características e da elegibilidade de cada empresa."
      },
      {
        question: "Também há atendimento para MEI e profissionais autônomos?",
        answer:
          "Sim. A Karine atende MEI e autônomos que precisam organizar obrigações como INSS, ISS, Carnê-Leão, documentos e rotina fiscal."
      },
      {
        question: "É possível regularizar uma empresa que possui pendências?",
        answer:
          "Sim. Primeiro são analisadas as pendências cadastrais e as obrigações da empresa; depois são orientados os próximos passos adequados à situação encontrada."
      },
      {
        question: "O atendimento é somente em Jacarepaguá?",
        answer:
          "Não. O escritório realiza atendimento presencial em Jacarepaguá, no Rio de Janeiro, e também atende remotamente clientes de outras regiões do Brasil."
      },
      {
        question: "Quais documentos são necessários para abrir uma empresa?",
        answer:
          "Os documentos variam conforme a atividade, o endereço, os sócios e o tipo de empresa. Na conversa inicial, a Karine identifica o cenário e orienta a lista aplicável ao caso."
      },
      {
        question: "Posso trocar de contador e levar minha empresa para a Karine?",
        answer:
          "Sim. A situação contábil e fiscal é analisada para organizar a transição, conferir informações e definir os próximos passos com responsabilidade."
      }
    ]
  },
  rollers: {
    authority: {
      enabled: true,
      speedSeconds: 30,
      direction: "left",
      items: [
        { label: "Abertura de empresa de serviços", icon: "route" },
        { label: "Contabilidade no Simples Nacional", icon: "badge-check" },
        { label: "MEI e autônomos", icon: "user" },
        { label: "Imposto de Renda PJ e PF", icon: "document" },
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
        { label: "Da abertura à rotina contábil", icon: "spark" },
        { label: "Empresas, MEI e autônomos", icon: "clipboard" },
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
    heroEyebrow: "Contabilidade em Jacarepaguá e atendimento em todo o Brasil",
    heroHeadline: {
      before: "Abra e mantenha sua empresa de serviços",
      highlight: "no Simples Nacional",
      after: "com clareza",
      variant: "glow"
    },
    heroSubtitle:
      "Abertura e contabilidade para empresas de serviços, com suporte também para regularização, MEI, autônomos e Imposto de Renda.",
    heroPrimaryCta: "Quero orientação contábil",
    heroSecondaryCta: "Ver todos os serviços",
    servicesHeadline: {
      before: "Apoio contábil para cada fase do",
      highlight: "seu negócio",
      after: "",
      variant: "glow"
    },
    servicesSubtitle:
      "Abertura e contabilidade no Simples Nacional são o carro-chefe, com soluções também para MEI, autônomos, obrigações fiscais e Imposto de Renda.",
    specialistEyebrow: "Quem está por trás da sua contabilidade",
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
      before: "Da primeira conversa aos próximos passos da sua",
      highlight: "vida contábil",
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
      before: "Atendimento presencial em",
      highlight: "Jacarepaguá",
      after: "e remoto para todo o Brasil",
      variant: "glow"
    },
    finalEyebrow: "Cuide do seu negócio",
    finalHeadline: {
      before: "Encontre o apoio contábil adequado ao",
      highlight: "seu momento",
      after: "",
      variant: "glow"
    },
    finalSubtitle:
      "Seja para abrir uma empresa, cuidar do MEI, organizar a rotina como autônomo ou declarar o Imposto de Renda, conte sua necessidade pelo WhatsApp.",
    finalBenefits: [
      "Abertura de empresa de serviços",
      "Contabilidade para MEI e Simples Nacional",
      "Autônomos e Imposto de Renda"
    ],
    footerDescription:
      "Karine Fernandes Contabilidade: abertura e contabilidade para empresas, MEI, autônomos e Imposto de Renda, com atendimento presencial em Jacarepaguá e remoto para todo o Brasil."
  },
  layout: {
    heroVariant: "specialist-background",
    heroBackgroundPositionMobile: "48% top",
    heroBackgroundPositionDesktop: "center center",
    servicesVariant: "carousel",
    servicesTone: "light",
    contentTone: "light",
    specialistVariant: "profile-card",
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
      "Olá! Posso ajudar você a identificar o atendimento mais próximo da sua necessidade contábil.",
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
        id: "mei-autonomo",
        label: "Sou MEI ou profissional autônomo",
        icon: "user",
        response:
          "O atendimento pode orientar sobre organização fiscal, obrigações e o formato adequado à sua atividade.",
        relatedServiceId: "obrigacoes-fiscais",
        whatsappMessage: "Sou MEI ou profissional autônomo e quero orientação contábil."
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
    title: "Contabilidade em Jacarepaguá para Empresas | Karine Fernandes",
    description:
      "Contabilidade em Jacarepaguá para abertura, regularização e rotina de empresas de serviços no Simples Nacional. Atendimento presencial e remoto em todo o Brasil.",
    canonical: "https://karinefernandes.vercel.app/karine-fernandes-contabilidade",
    allowIndexing: true,
    schemaType: "AccountingService"
  },
  tracking: {
    googleAnalyticsId: "G-CT3HD17CRB",
    googleTagManagerId: "GTM-P82NFJ87",
    metaPixelId: null
  }
} satisfies ProspectConfigInput;
