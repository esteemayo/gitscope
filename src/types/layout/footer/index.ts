import { LucideIcon } from 'lucide-react';

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterColumn {
  id: string;
  title: string;
  links: FooterLink[];
}

export interface FooterSocialLink {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon | React.ComponentType;
}
