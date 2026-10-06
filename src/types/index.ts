export interface Project {
  id: string;
  title: string;
  category: 'All' | 'E-Commerce' | 'Real Estate' | 'Healthcare' | 'AI & SaaS' | 'Restaurant & Food' | 'Corporate & Finance' | 'Education' | 'Creative & Media';
  industry: string;
  description: string;
  fullDescription?: string;
  framework: string;
  styling: string;
  techStack: string[];
  metrics: string;
  image: string;
  color: string;
  liveUrl: string;
  features: string[];
  client: string;
  year: string;
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  color: string;
  features: string[];
  deliverables: string[];
  popularTech: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  title: string;
  image: string;
  bio: string;
  specialties: string[];
  experience: string;
  phone: string;
  email: string;
  whatsappUrl: string;
  socials: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  details: string[];
  icon: string;
}
