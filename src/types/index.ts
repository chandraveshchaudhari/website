export interface Personal {
  name: string;
  title: string;
  image: string;
  email: string;
  location: string;
}

export interface SEO {
  title: string;
  description: string;
}

export type AnimatedText = string;

export interface Navigation {
  name: string;
  url: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
}

export interface Project {
  title: string;
  description: string;
  link: string;
}

export interface Research {
  title: string;
  journal: string;
  link: string;
}

export interface Book {
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface Contact {
  email: string;
  linkedin: string;
  github: string;
}

/* ✅ Fixed Certification typing using discriminated union */

export interface CertificateItem {
  name: string;
  file: string;
}

export interface SingleCertification {
  title: string;
  cardImage: string;
  specialization: false;
  file: string;
}

export interface SpecializationCertification {
  title: string;
  cardImage: string;
  specialization: true;
  certificates: CertificateItem[];
}

export type Certification = SingleCertification | SpecializationCertification;

export interface SiteConfig {
  personal: Personal;
  seo: SEO;
  animatedText: AnimatedText[];
  navigation: Navigation[];
  education: Education[];
  experience: Experience[];
  projects: Project[];
  research: Research[];
  books: Book[];
  contact: Contact;
  certifications: Certification[];
}
