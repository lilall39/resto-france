/** Types partagés pour les données du site */

export interface NavLink {
  label: string;
  href: string;
}

export interface HeroData {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
}

export interface CardData {
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  buttonText?: string;
  buttonHref?: string;
}

export interface SectionData {
  title: string;
  subtitle?: string;
  content: string;
  image?: string;
  imageAlt?: string;
}

export interface CTAData {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  location?: string;
  year?: string;
}

export interface PageMeta {
  title: string;
  description: string;
  ogImage?: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  hours?: string;
}
