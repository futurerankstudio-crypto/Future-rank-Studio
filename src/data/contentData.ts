import { Service, TeamMember, Testimonial, ProcessStep } from '../types';

export const STUDIO_INFO = {
  name: 'Future Rank Studio',
  tagline: 'Building the Future with AI & Technology',
  description: 'Future Rank Studio creates innovative websites, AI solutions, mobile apps and digital experiences that help businesses grow, scale and stay ahead in the digital world.',
  email: 'futurerankstudio@gmail.com',
  phone: '+92 321 7507345',
  whatsappRaw: '923217507345',
  whatsappUrl: 'https://wa.me/923217507345?text=Hello%20Future%20Rank%20Studio%2C%20I%20would%20like%20to%20discuss%20a%20project%21',
  location: 'Global Digital Agency / Available Worldwide',
  stats: {
    liveWebsites: '50+',
    industries: '20+',
    clientSatisfaction: '100%',
    averageRating: '5★',
    yearsExperience: '5+',
    successfulProjects: '50+',
    happyClients: '100+',
    teamMembers: '10+'
  }
};

export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    title: 'Website Development',
    shortDesc: 'Modern, fast & SEO friendly websites.',
    iconName: 'Globe',
    color: '#3b82f6',
    features: [
      'Next.js & React High Performance SPAs',
      'Ultra-Fast Loading Speeds (100 Lighthouse)',
      'Built-in Technical SEO & Rich Snippets',
      'Fully Responsive Across Mobile, Tablet & Desktop',
      'Custom Content Management & Headless CMS'
    ],
    deliverables: ['Custom Web App', 'Design System', 'SEO Audit', 'Speed Optimization'],
    popularTech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js']
  },
  {
    id: 'ai-dev',
    title: 'AI Development',
    shortDesc: 'Smart solutions for a smarter tomorrow.',
    iconName: 'Brain',
    color: '#a855f7',
    features: [
      'Custom LLM & Gemini Model Fine-Tuning',
      'Autonomous Business Workflow Agents',
      'Intelligent RAG & Knowledge Retrieval Systems',
      'Real-Time Conversational Voice & Chat Bots',
      'Predictive Analytics & Computer Vision'
    ],
    deliverables: ['AI Pipeline Architecture', 'Vector DB Setup', 'Fine-Tuned Models', 'Admin API Dashboard'],
    popularTech: ['Gemini API', 'LangChain', 'Python', 'FastAPI', 'Pinecone']
  },
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    shortDesc: 'iOS & Android apps with amazing UX.',
    iconName: 'Smartphone',
    color: '#06b6d4',
    features: [
      'Native-Quality Cross-Platform iOS & Android Apps',
      'Smooth 60fps Micro-Interactions & Gestures',
      'Offline-First Sync & Push Notifications',
      'In-App Subscriptions & Apple / Google Pay',
      'App Store & Play Store Publishing Management'
    ],
    deliverables: ['iOS App Build', 'Android APK/Bundle', 'Store Listings', 'Backend API Sync'],
    popularTech: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase']
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    shortDesc: 'Beautiful designs that users love.',
    iconName: 'Palette',
    color: '#ec4899',
    features: [
      'Bespoke User Journey Mapping & Wireframing',
      'High-Fidelity Interactive Prototypes in Figma',
      'Scalable Design Systems & Component Tokens',
      'Conversion Rate Optimization (CRO) UX Audits',
      'Micro-Animations & Visual Brand Identity'
    ],
    deliverables: ['Figma Design Files', 'Design Tokens', 'User Journey Map', 'Interactive Prototype'],
    popularTech: ['Figma', 'Framer', 'Adobe Creative Cloud', 'Protopie']
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    shortDesc: 'Secure, scalable & reliable cloud infrastructure.',
    iconName: 'Cloud',
    color: '#0ea5e9',
    features: [
      'High-Availability Cloud Architecture (AWS, GCP, Azure)',
      'Docker Containerization & Kubernetes Clusters',
      'Serverless APIs & Edge Compute Deployments',
      'Automated CI/CD Pipelines with GitHub Actions',
      'Zero-Downtime Migration & Database Replication'
    ],
    deliverables: ['Infrastructure as Code', 'CI/CD Pipeline', 'Monitoring Alerts', 'Security Hardening'],
    popularTech: ['AWS', 'Google Cloud', 'Docker', 'Terraform', 'PostgreSQL']
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Development',
    shortDesc: 'High converting online stores.',
    iconName: 'ShoppingCart',
    color: '#f59e0b',
    features: [
      'Headless Shopify, WooCommerce & Custom Stores',
      '1-Click Frictionless Checkout & Multi-Currency',
      'Automated Inventory, Orders & Fulfillment Sync',
      'Abandoned Cart Recovery & Upsell Engines',
      'Global Tax & Shipping Calculation APIs'
    ],
    deliverables: ['Custom Storefront', 'Payment Gateway Integration', 'Product Management', 'Analytics Funnel'],
    popularTech: ['Shopify', 'Next.js Commerce', 'Stripe', 'Supabase', 'Tailwind']
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing & SEO',
    shortDesc: 'Rank higher, get more customers.',
    iconName: 'TrendingUp',
    color: '#10b981',
    features: [
      'Data-Driven Search Engine Optimization (SEO)',
      'Google #1 Page Keyword Ranking Strategies',
      'High-ROI Paid Ad Campaigns (Google & Meta Ads)',
      'Content Strategy & Technical SEO Audits',
      'Comprehensive Monthly Growth & ROI Reporting'
    ],
    deliverables: ['SEO Roadmap', 'Keyword Strategy', 'Content Calendar', 'Monthly Analytics Report'],
    popularTech: ['Google Analytics 4', 'Ahrefs', 'Semrush', 'Google Search Console']
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    shortDesc: 'Your data, our priority.',
    iconName: 'ShieldCheck',
    color: '#ef4444',
    features: [
      'End-to-End Vulnerability Assessments & Pen Testing',
      'Zero-Trust Architecture & Identity Access Management',
      'Web Application Firewall (WAF) & DDoS Mitigation',
      'GDPR, HIPAA & ISO 27001 Compliance Readiness',
      '24/7 Security Incident Monitoring & Patching'
    ],
    deliverables: ['Pen-Test Report', 'WAF Setup', 'Compliance Checklist', 'Security Certificate'],
    popularTech: ['Cloudflare', 'OWASP Top 10', 'Vault', 'OAuth 2.0', 'SSL/TLS 1.3']
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Adeel Abbas',
    role: 'Founder & Chief Technology Officer',
    title: 'Founder & Lead Architect',
    image: '/src/assets/images/adeel_abbas_real_1791265777789.jpg',
    bio: 'Visionary technologist and lead system architect at Future Rank Studio. Adeel specializes in architecting high-scale digital platforms, full-stack enterprise web ecosystems, and modern AI-driven infrastructures. With over 6 years of hands-on software development excellence, he leads engineering teams in turning complex business ideas into lightning-fast, secure, and revenue-generating digital products.',
    specialties: ['Enterprise Architecture', 'Full-Stack Next.js / React', 'Cloud Infrastructure', 'Scalable Database Systems'],
    experience: '6+ Years Experience in Software Engineering & Product Leadership',
    phone: '+92 321 7507345',
    email: 'futurerankstudio@gmail.com',
    whatsappUrl: 'https://wa.me/923217507345?text=Hello%20Adeel%20Abbas%2C%20I%20would%20like%20to%20discuss%20a%20project%20with%20Future%20Rank%20Studio',
    socials: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    name: 'Mir Zain Haider',
    role: 'Co-Founder & Head of AI & Product Development',
    title: 'Co-Founder & Managing Director',
    image: '/src/assets/images/mir_zain_haider_1791264627678.jpg',
    bio: 'Co-Founder and Head of Artificial Intelligence & Product Innovation at Future Rank Studio. Mir Zain directs product strategy, user experience excellence, and next-generation AI integrations. He excels in building intuitive, high-converting digital products, autonomous AI agent pipelines, and forging long-term partnerships with global clients across 20+ industries.',
    specialties: ['Generative AI & LLM Systems', 'Product Strategy & Growth', 'UI/UX Systems Design', 'Client Success & Execution'],
    experience: '5+ Years Experience in AI Solutions & Product Innovation',
    phone: '+92 321 7507345',
    email: 'futurerankstudio@gmail.com',
    whatsappUrl: 'https://wa.me/923217507345?text=Hello%20Mir%20Zain%20Haider%2C%20I%20would%20like%20to%20discuss%20an%20AI%20project%20with%20Future%20Rank%20Studio',
    socials: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      twitter: 'https://twitter.com'
    }
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discovery',
    description: 'Understand your goals and requirements.',
    details: [
      'Comprehensive business requirement workshops',
      'Market and competitor benchmarking',
      'Target user persona identification',
      'Technical architecture feasibility and project roadmap'
    ],
    icon: 'Search'
  },
  {
    step: '02',
    title: 'Design',
    description: 'Create modern and user-friendly designs.',
    details: [
      'Wireframing core user conversion paths',
      'Interactive Figma prototypes and visual polish',
      'Component library & brand design token setup',
      'Feedback loops & design approvals'
    ],
    icon: 'Palette'
  },
  {
    step: '03',
    title: 'Development',
    description: 'Build with clean code and best practices.',
    details: [
      'Pixel-perfect frontend engineering with Next.js & Tailwind',
      'Scalable backend APIs and secure database modeling',
      'AI models & third-party API integration',
      'Clean, maintainable, and modular codebase'
    ],
    icon: 'Code2'
  },
  {
    step: '04',
    title: 'Testing',
    description: 'Ensure quality, performance and security.',
    details: [
      'Rigorous cross-device & cross-browser quality assurance',
      'Performance optimization for 95+ Google Lighthouse scores',
      'Cybersecurity vulnerability scans and data encryption checks',
      'User acceptance testing (UAT)'
    ],
    icon: 'ShieldCheck'
  },
  {
    step: '05',
    title: 'Launch',
    description: 'Go live and provide ongoing support.',
    details: [
      'Seamless production deployment & domain SSL configuration',
      'Search engine indexing & analytics tracking setup',
      'Comprehensive staff training & documentation handoff',
      '24/7 dedicated support and continuous feature scaling'
    ],
    icon: 'Rocket'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'sarah-khan',
    name: 'Sarah Khan',
    role: 'COO',
    company: 'SkyVista Solutions',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    content: 'Future Rank Studio delivered an outstanding website for our business. The design is modern, fast and exactly what we needed.',
    rating: 5
  },
  {
    id: 'ahmed-raza',
    name: 'Ahmed Raza',
    role: 'Founder',
    company: 'TechNova',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    content: 'Their AI solution helped us automate our processes and save hours of work. Highly professional and supportive team!',
    rating: 5
  },
  {
    id: 'fatima-ali',
    name: 'Fatima Ali',
    role: 'Marketing Director',
    company: 'BrightCare',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    content: 'Amazing work! The team is creative, responsive and understands business needs very well.',
    rating: 5
  }
];

export const FAQ_ITEMS = [
  {
    question: 'How fast can Future Rank Studio launch our project?',
    answer: 'Standard bespoke websites typically launch within 1 to 2 weeks. Complex custom web applications, SaaS dashboards, and AI integrations range from 3 to 6 weeks. We work with strict milestone sprint deliveries.'
  },
  {
    question: 'Do you provide post-launch maintenance and 24/7 technical support?',
    answer: 'Yes! Every project includes complimentary post-launch support, security monitoring, cloud backups, and our 24/7 WhatsApp concierge direct hotline.'
  },
  {
    question: 'Can we directly integrate AI models into our existing web or mobile app?',
    answer: 'Absolutely. We specialize in retrofitting existing architectures with custom Gemini and LLM workflows, automated customer service agents, smart semantic search, and document intelligence.'
  },
  {
    question: 'How do we get started or request an estimate?',
    answer: 'Simply tap the "Get Started" button or contact us directly on WhatsApp at +92 321 7507345 or via email at futurerankstudio@gmail.com. We reply within minutes!'
  }
];
