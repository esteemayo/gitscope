import { LucideIcon } from 'lucide-react';

export interface PrivacyPrincipleCTA {
  label: string;
  href: string;
}

export interface PrivacyPrincipleItem {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accentColor: string;
  highlights: string[];
  reverse?: boolean;
  cta?: PrivacyPrincipleCTA;
  className?: string;
  style?: React.CSSProperties;
}
