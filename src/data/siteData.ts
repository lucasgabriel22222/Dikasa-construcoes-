export interface ProductItem {
  id: string;
  name: string;
  category: 'basico' | 'acabamentos' | 'loucas' | 'hidraulica' | 'eletrica' | 'tintas';
  categoryLabel: string;
  badge: string;
  shortDesc: string;
  highlightItems: string[];
  image: string;
  whatsappMessage: string;
}

export interface QuickListItem {
  id: string;
  name: string;
  unit: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  stars: number;
  text: string;
  date: string;
  verified: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const siteData = {
  company: {
    name: "DIKASA CONSTRUÇÃO E ACABAMENTO",
    shortName: "Dikasa Construção",
    tagline: "Materiais de construção, acabamentos de alto padrão e tudo para sua obra em Cuiabá",
    slogan: "Do Básico ao Acabamento: Tudo Para a Sua Obra com Entrega Rápida",
    cnpj: "Disponível sob consulta",
    address: "Avenida A, esquina com avenida I Quadra 14 lote 08 - I, Cuiabá - MT, 78096-385, Brasil",
    addressShort: "Avenida A, esq. com Av. I, Qd 14 Lote 08 - I, Cuiabá - MT",
    cep: "78096-385",
    city: "Cuiabá",
    state: "MT",
    phoneDisplay: "(65) 99219-2986",
    phoneFormatted: "+55 65 99219-2986",
    rawPhone: "5565992192986",
    whatsappDefaultUrl: "https://wa.me/5565992192986?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20materiais%20na%20Dikasa%20Constru%C3%A7%C3%A3o.",
    workingHoursDisplay: "Segunda a Sábado: 07h30 às 18h00",
    openingHour: 7.5, // 07:30
    closingHour: 18.0, // 18:00
    googleRating: 4.7,
    googleReviewCount: 80,
    instagram: "https://www.instagram.com/dikasaconstrucao",
    facebook: "https://www.facebook.com/dikasaconstrucao",
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=Avenida+A+esquina+com+avenida+I+Quadra+14+lote+08+-+I+Cuiaba+MT+78096-385&t=&z=16&ie=UTF8&iwloc=&output=embed",
    googleMapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=Avenida+A+esquina+com+avenida+I+Quadra+14+lote+08+-+I+Cuiaba+MT+78096-385"
  },

  stats: [
    {
      value: "4.7 ★",
      label: "Avaliação Google",
      sublabel: "Com base em 80+ avaliações reais de clientes em Cuiabá"
    },
    {
      value: "100%",
      label: "Obra Completa",
      sublabel: "Do básico ao acabamento de alto padrão no mesmo lugar"
    },
    {
      value: "Ágil",
      label: "Entrega em Cuiabá",
      sublabel: "Logística pontual para não paralisar o seu cronograma"
    },
    {
      value: "WhatsApp",
      label: "Orçamento Rápido",
      sublabel: "Basta enviar foto ou texto da sua lista de materiais"
    }
  ],

  categories: [
    { id: 'todos', label: 'Todos os Departamentos' },
    { id: 'basico', label: 'Básico & Estrutura' },
    { id: 'acabamentos', label: 'Acabamentos & Pisos' },
    { id: 'loucas', label: 'Louças & Metais' },
    { id: 'hidraulica', label: 'Hidráulica' },
    { id: 'eletrica', label: 'Elétrica' },
    { id: 'tintas', label: 'Tintas & Pintura' }
  ],

  products: [
    {
      id: "basico",
      name: "Materiais Básicos de Construção",
      category: "basico",
      categoryLabel: "Fundação & Alvenaria",
      badge: "Essencial para Obra",
      shortDesc: "Tudo o que sua fundação, estrutura e alvenaria precisam com garantia de procedência e marcas consagradas.",
      highlightItems: [
        "Cimento CP-II e CP-IV (Votoran / Cauê)",
        "Areia média, grossa e fina lavada",
        "Brita 0, 1 e 2 de pedreira selecionada",
        "Vergalhões de Ferro Gerdau (todas as bitolas)",
        "Tijolos cerâmicos e blocos de concreto",
        "Argamassas e cal para assentamento"
      ],
      image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=800&q=80",
      whatsappMessage: "Olá! Gostaria de fazer um orçamento de Materiais Básicos (cimento, ferro, areia, brita ou tijolos) na Dikasa Construção."
    },
    {
      id: "acabamentos",
      name: "Acabamentos de Alto Padrão & Pisos",
      category: "acabamentos",
      categoryLabel: "Pisos & Revestimentos",
      badge: "Alto Padrão",
      shortDesc: "Variedade sofisticada de porcelanatos, pisos e revestimentos para valorizar cada ambiente do seu imóvel.",
      highlightItems: [
        "Porcelanatos polidos, acetinados e texturizados",
        "Pisos cerâmicos retificados de grandes formatos",
        "Revestimentos 3D e decorativos para paredes",
        "Rodapés de poliestireno e cerâmicos",
        "Argamassas AC-II e AC-III para grandes formatos",
        "Rejuntes epóxi, acrílicos e cimentícios"
      ],
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      whatsappMessage: "Olá! Gostaria de consultar opções e orçar Pisos e Porcelanatos de Alto Padrão na Dikasa Construção."
    },
    {
      id: "loucas",
      name: "Louças & Metais Sanitários",
      category: "loucas",
      categoryLabel: "Banheiro & Cozinha",
      badge: "Design & Economia",
      shortDesc: "Metais nobres, cubas elegantes e louças com tecnologia economizadora de água para banheiros e cozinhas.",
      highlightItems: [
        "Vasos sanitários com caixa acoplada dupla descarga (3L/6L)",
        "Cubas de apoio, sobrepor e embutir",
        "Torneiras gourmet, monocomandos e misturadores",
        "Chuveiros elétricos, pressurizados e duchas higiênicas",
        "Registros de gaveta e pressão de latão reforçado",
        "Acessórios cromados, preto fosco e inox"
      ],
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      whatsappMessage: "Olá! Gostaria de solicitar um orçamento de Louças e Metais Sanitários para banheiro/cozinha na Dikasa Construção."
    },
    {
      id: "hidraulica",
      name: "Materiais Hidráulicos Completos",
      category: "hidraulica",
      categoryLabel: "Rede Hidráulica & Esgoto",
      badge: "Mais Vendido",
      shortDesc: "Sistemas completos para condução segura de água fria, quente e esgoto sem risco de vazamentos futuros.",
      highlightItems: [
        "Tubos e conexões de água fria e quente (PVC e PPR)",
        "Tubos de esgoto normatizados (série normal e reforçada)",
        "Caixas d'água de 500L, 1000L e 2000L",
        "Ralos lineares, caixas sifonadas e sifões flexíveis",
        "Válvulas de retenção, filtros e bombas hidráulicas",
        "Fitas veda rosca e colas especializadas"
      ],
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      whatsappMessage: "Olá! Gostaria de orçar materiais da Linha Hidráulica completa (tubos, conexões e caixas d'água) na Dikasa Construção."
    },
    {
      id: "eletrica",
      name: "Materiais Elétricos & Iluminação",
      category: "eletrica",
      categoryLabel: "Elétrica & Segurança",
      badge: "Segurança Certificada",
      shortDesc: "Condutores, proteções e acabamentos elétricos que atendem rigorosamente às normas técnicas brasileiras.",
      highlightItems: [
        "Fios e cabos de cobre anti-chama 100% normatizados",
        "Disjuntores termomagnéticos e DRs de segurança",
        "Quadros de distribuição de sobrepor e embutir",
        "Tomadas, interruptores e placas de acabamento modulares",
        "Eletrodutos corrugados e mangueiras reforçadas",
        "Painéis LED de embutir e sobrepor, spots e refletores"
      ],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      whatsappMessage: "Olá! Gostaria de orçar Materiais Elétricos (fios, disjuntores, tomadas ou iluminação) na Dikasa Construção."
    },
    {
      id: "tintas",
      name: "Tintas, Impermeabilizantes & Pintura",
      category: "tintas",
      categoryLabel: "Proteção & Pintura",
      badge: "Máxima Proteção",
      shortDesc: "Cores duráveis para interior e exterior, além de impermeabilizantes que protegem sua estrutura contra umidade.",
      highlightItems: [
        "Tintas acrílicas premium foscas, acetinadas e semibrilho",
        "Impermeabilizantes para lajes, baldrames e paredes",
        "Massas corridas e massas acrílicas para nivelamento",
        "Seladores, fundos preparadores e vernizes",
        "Trinchas, rolos de microfibra, bandejas e lixas",
        "Fitas crepe e plásticos para proteção de piso"
      ],
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80",
      whatsappMessage: "Olá! Gostaria de fazer um orçamento de Tintas e Impermeabilizantes na Dikasa Construção."
    }
  ] as ProductItem[],

  quickListOptions: [
    { id: "cimento", name: "Cimento CP-II (Saco 50kg)", unit: "sacas", category: "Básico" },
    { id: "areia", name: "Areia Média / Grossa", unit: "m³ ou caminhão", category: "Básico" },
    { id: "brita", name: "Brita 0 ou 1", unit: "m³ ou caminhão", category: "Básico" },
    { id: "ferro", name: "Ferro / Vergalhões Gerdau", unit: "barras / kg", category: "Básico" },
    { id: "tijolos", name: "Tijolos / Blocos cerâmicos", unit: "milheiros", category: "Básico" },
    { id: "porcelanato", name: "Porcelanato Retificado", unit: "m²", category: "Acabamento" },
    { id: "argamassa", name: "Argamassa AC-II ou AC-III", unit: "sacas 20kg", category: "Acabamento" },
    { id: "rejunte", name: "Rejunte Acrílico / Epóxi", unit: "kg", category: "Acabamento" },
    { id: "tinta", name: "Tinta Acrílica Premium (Lata 18L)", unit: "latas", category: "Pintura" },
    { id: "impermeabilizante", name: "Impermeabilizante p/ Laje/Parede", unit: "baldes 18kg", category: "Pintura" },
    { id: "tubo_agua", name: "Tubos e Conexões Água Fria", unit: "lista / unidades", category: "Hidráulica" },
    { id: "caixa_dagua", name: "Caixa d'Água (500L ou 1000L)", unit: "unidades", category: "Hidráulica" },
    { id: "fios_eletricos", name: "Cabos Elétricos (1.5mm a 10mm)", unit: "rolos 100m", category: "Elétrica" },
    { id: "disjuntores", name: "Disjuntores & Quadro de Luz", unit: "conjunto", category: "Elétrica" }
  ] as QuickListItem[],

  differentials: [
    {
      title: "Reputação Consolidada",
      desc: "Nota 4.7 no Google com mais de 80 avaliações de clientes satisfeitos, mestres de obras e arquitetos em Cuiabá.",
      icon: "ShieldCheck",
      tag: "4.7 no Google"
    },
    {
      title: "Do Básico ao Acabamento",
      desc: "Economize tempo e frete comprando desde a fundação e estrutura pesada até os pisos e louças mais refinados.",
      icon: "Building2",
      tag: "Tudo em 1 Lugar"
    },
    {
      title: "Atendimento Consultivo Técnico",
      desc: "Nossa equipe ajuda você a calcular a quantidade certa de materiais, evitando desperdícios e compras em excesso.",
      icon: "Calculator",
      tag: "Suporte Técnico"
    },
    {
      title: "Entrega Rápida e Segura",
      desc: "Frota própria e logística programada para descarregar seus materiais pontualmente no canteiro da sua obra.",
      icon: "Truck",
      tag: "Cuiabá e Região"
    },
    {
      title: "Orçamento Fácil por WhatsApp",
      desc: "Envie uma foto da sua lista manuscrita ou texto com os itens. Respondemos com a cotação detalhada e rápida.",
      icon: "MessageSquare",
      tag: "Sem Burocracia"
    },
    {
      title: "Localização de Fácil Acesso",
      desc: "Fácil estacionamento para clientes e doca para retirada rápida de mercadorias no bairro Jardim Industriário.",
      icon: "MapPin",
      tag: "Estacionamento Amplo"
    }
  ],

  testimonials: [
    {
      id: "1",
      name: "Roberto Mendes",
      role: "Cliente Residencial",
      stars: 5,
      text: "Loja excelente para quem está construindo ou reformando. Encontrei tudo o que precisava do básico ao acabamento com preços justos e entrega rápida.",
      date: "Há 2 semanas",
      verified: true
    },
    {
      id: "2",
      name: "Fernanda Siqueira",
      role: "Reforma Residencial",
      stars: 5,
      text: "Ótimo atendimento! Os vendedores são muito prestativos e ajudaram a calcular a quantidade exata de pisos e revestimentos para a minha casa.",
      date: "Há 1 mês",
      verified: true
    },
    {
      id: "3",
      name: "Carlos Eduardo",
      role: "Engenheiro Civil / Obra",
      stars: 4,
      text: "Variedade muito boa de materiais e facilidade para fechar orçamento direto pelo WhatsApp. Recomendo em Cuiabá.",
      date: "Há 2 meses",
      verified: true
    },
    {
      id: "4",
      name: "Marcos Vinícius",
      role: "Mestre de Obras",
      stars: 5,
      text: "Compro sempre para os clientes das minhas obras. A entrega do cimento e do ferro sempre chega no prazo combinado, o que não deixa a equipe parada.",
      date: "Há 3 semanas",
      verified: true
    },
    {
      id: "5",
      name: "Luciana Almeida",
      role: "Arquiteta de Interiores",
      stars: 5,
      text: "Excelente variedade de porcelanatos e acabamentos. O pós-venda da Dikasa é impecável e a negociação foi muito transparente.",
      date: "Há 1 mês",
      verified: true
    }
  ] as Testimonial[],

  faq: [
    {
      question: "Vocês fazem entrega de materiais de construção em Cuiabá e região?",
      answer: "Sim! Contamos com logística própria e equipe treinada para realizar entregas pontuais e seguras tanto de materiais pesados (cimento, areia, brita, ferro e tijolos) quanto de acabamentos delicados (porcelanatos, louças e tintas) direto no seu canteiro de obras."
    },
    {
      question: "Como faço para enviar minha lista de materiais para orçamento?",
      answer: "É muito simples e rápido! Basta clicar em qualquer botão de WhatsApp do nosso site, anexar uma foto da sua lista manuscrita ou enviar o texto com os produtos necessários. Nossa equipe técnica calcula as quantidades e retorna com a proposta detalhada."
    },
    {
      question: "Quais são as formas de pagamento aceitas pela Dikasa Construção?",
      answer: "Aceitamos Pix com condições especiais, cartões de crédito com opções de parcelamento facilitado, além de transferência bancária e faturamento programado para compras de grande volume ou empresas cadastradas."
    },
    {
      question: "A loja trabalha com materiais do básico ao acabamento?",
      answer: "Sim! Nosso lema é suprir sua obra por completo. Fornecemos desde as sapatas e baldrames (ferro, cimento, brita, areia e tijolos) até as fases finais (pisos, porcelanatos, registros, louças sanitárias, tintas e iluminação LED)."
    },
    {
      question: "Onde a loja física está localizada e qual o horário de funcionamento?",
      answer: "Estamos localizados na Avenida A, esquina com avenida I Quadra 14 lote 08 - I, Cuiabá - MT (CEP 78096-385). Atendemos de Segunda a Sábado das 07h30 às 18h00, com estacionamento privativo e doca para retirada."
    },
    {
      question: "Vocês emitem Nota Fiscal para pessoas físicas e jurídicas?",
      answer: "Sim, 100% de nossas vendas acompanham Nota Fiscal eletrônica (NFe), garantindo a procedência dos materiais, garantia do fabricante e segurança contábil para sua construção ou empresa."
    }
  ] as FaqItem[]
};

export function buildWhatsAppLink(customMessage?: string): string {
  const phone = siteData.company.rawPhone;
  const message = customMessage || "Olá! Vim pelo site e gostaria de solicitar um orçamento de materiais na Dikasa Construção.";
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function isStoreOpenNow(): { isOpen: boolean; statusText: string } {
  // Cuiabá is UTC-4
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const cuiabaDate = new Date(utc + 3600000 * -4);

  const dayOfWeek = cuiabaDate.getDay(); // 0: Sunday, 1: Mon, ..., 6: Sat
  const hour = cuiabaDate.getHours() + cuiabaDate.getMinutes() / 60;

  if (dayOfWeek === 0) {
    return { isOpen: false, statusText: "Fechado hoje (Domingo) • Reabre Segunda às 07h30" };
  }

  const openHour = 7.5; // 07:30
  const closeHour = 18.0; // 18:00

  if (hour >= openHour && hour < closeHour) {
    return { isOpen: true, statusText: "Aberto Agora • Atendimento até 18h00" };
  } else if (hour < openHour) {
    return { isOpen: false, statusText: "Fechado no momento • Abre hoje às 07h30" };
  } else {
    return { isOpen: false, statusText: "Fechado no momento • Abre amanhã às 07h30" };
  }
}
