export const profile = {
  name: 'Richard',
  logo: '/images/logo.png',
  roles: ['Fullstack Web Developer', 'Shopify Expert', 'Brand Designer'],
  tagline: 'I design and build premium ecommerce and brand websites from Ibadan.',
  email: 'meetsenpai@gmail.com',
  emailSubject: "Let's work together",
  whatsapp: '2348105174121',
  socials: {
    instagram: 'https://www.instagram.com/therichchris/',
    linkedin: 'https://www.linkedin.com/in/richard-ojedayo-886169247/',
  },
  cvUrl: '#',
  avatar: '/images/richard-headshot.png',
  statement: "I'm building digital experiences that people remember",
  stats: [
    { value: '5+', label: 'Years of experience' },
    { value: '7+', label: 'Years Shopify/CRO Experience' },
    { value: '50+', label: 'Happy clients' },
  ],
  clients: ['Echofy', 'ECO Skincare', 'Clara Marketing', 'Gloow', 'ICESTEIN'],
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Tech', href: '#tech' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export const about = {
  heading: 'Design that earns attention, code that keeps it.',
  paragraphs: [
    'Great design should feel like it was made for you — familiar enough that every visitor feels they belong, and considered enough to outlast the trend cycle. That timeless, welcoming quality is exactly what I build into every project.',
  ],
  awards: [
    { title: 'Site of the Day', org: '[Awarding Org]', year: '2025', image: '/images/project-echofy.png' },
    { title: 'Best Ecommerce UX', org: '[Awarding Org]', year: '2024', image: '/images/project-eco.png' },
    { title: 'Honorable Mention', org: '[Awarding Org]', year: '2024', image: '/images/project-clara.png' },
    { title: 'Design Excellence', org: '[Awarding Org]', year: '2023', image: '/images/project-gloow.png' },
  ],
}

export const timeline = [
  {
    range: '2023 — Present',
    title: 'Freelance Web Designer & Developer',
    org: 'Independent',
    description:
      'Designing and shipping Shopify and Next.js storefronts for beauty, audio, and lifestyle brands. Full ownership from discovery through launch.',
  },
  {
    range: '2021 — 2023',
    title: 'Shopify Developer & Designer',
    org: 'Upwork',
    description:
      'I help clients from across the globe build, redesign, or optimize their Shopify stores. I also help with migrations and dropshipping setup.',
  },
  {
    range: '2017 — 2021',
    title: 'Mechanical Engineering',
    org: 'Obafemi Awolowo University',
    description:
      'Studying Mechanical Engineering at Obafemi Awolowo University taught me to think in systems, reason past the surface, and build things that hold up under load. I later pivoted to software after realizing my talents were better suited to a keyboard than a workshop floor.',
  },
]

export const projects = [
  {
    title: 'Echofy',
    description: 'A dark, product-forward storefront for a smart wi-fi speaker brand.',
    image: '/images/project-echofy.png',
    year: '2025',
    role: 'Design & Development',
    tags: ['High-Converting Shopify Build'],
    platform: 'Shopify',
  },
  {
    title: 'ECO Skincare',
    description: 'An editorial, nature-led shopping experience for a natural skincare line.',
    image: '/images/project-eco.png',
    year: '2025',
    role: 'Design & Development',
    tags: ['High-Converting Shopify Build'],
    platform: 'Shopify',
  },
  {
    title: 'Clara Marketing',
    description: 'A refined, type-driven site for a social media marketing agency.',
    image: '/images/project-clara.png',
    year: '2024',
    role: 'Web Design',
    tags: ['Full Custom Web Build'],
    platform: 'Next.js',
  },
  {
    title: 'Gloow',
    description: 'A bright, high-converting beauty store with a playful visual system.',
    image: '/images/project-gloow.png',
    year: '2024',
    role: 'Design & Development',
    tags: ['High-Converting Shopify Build'],
    platform: 'Shopify',
  },
]

export const services = [
  {
    title: 'Web Design',
    description:
      'Conversion-minded interfaces with a strong point of view — from wireframes to pixel-perfect, responsive design systems.',
    tags: ['UI/UX', 'Landing Pages', 'Design Systems', 'Prototyping'],
    images: ['/images/project-clara.png', '/images/project-eco.png'],
  },
  {
    title: 'Development',
    description:
      'Fast, accessible builds on Next.js and Shopify. Clean component architecture, real performance budgets, and a smooth handoff.',
    tags: ['Next.js', 'Shopify', 'Tailwind', 'Headless CMS'],
    images: ['/images/project-echofy.png', '/images/project-gloow.png'],
  },
  {
    title: 'Brand Identity',
    description:
      'Logo, typography, and color systems that translate cleanly into digital products and hold up across every touchpoint.',
    tags: ['Logo', 'Typography', 'Color', 'Guidelines'],
    images: ['/images/project-gloow.png', '/images/project-clara.png'],
  },
]

export const techStack = [
  { name: 'Figma', description: 'Interface design, prototyping, and design systems.', level: 95 },
  { name: 'Next.js', description: 'App Router builds with server components and edge rendering.', level: 90 },
  { name: 'Shopify', description: 'Theme development, Liquid, and headless storefronts.', level: 88 },
  { name: 'Tailwind CSS', description: 'Utility-first styling with token-driven theming.', level: 92 },
  { name: 'TypeScript', description: 'Typed, maintainable front-end architecture.', level: 85 },
  { name: 'Framer', description: 'Motion-rich marketing sites and quick concept launches.', level: 80 },
]

export const testimonials = {
  stats: [
    { value: '50+', label: 'Finalized projects' },
    { value: '98%', label: 'Client satisfaction' },
  ],
  items: [
    {
      quote:
        'Richard took a vague brief and turned it into a store that feels like a premium brand. Sales lifted in the first month and the site has been rock solid since.',
      name: 'Silas A.',
      role: 'Founder, Echofy',
      initials: 'SA',
    },
    {
      quote:
        'Thoughtful, fast, and genuinely collaborative. He pushed back where it mattered and the final product was far better for it.',
      name: 'Ryyarn N.',
      role: 'ICESTEIN',
      initials: 'ES',
    },
    {
      quote:
        'The attention to typography and detail is unreal. Our agency site finally looks the way our work deserves.',
      name: 'Eric L.',
      role: 'CEO, Clara Marketing',
      initials: 'EL',
    },
  ],
}

export const footerQuote = {
  text: 'Simplicity is the ultimate sophistication.',
  author: 'Leonardo da Vinci',
}
