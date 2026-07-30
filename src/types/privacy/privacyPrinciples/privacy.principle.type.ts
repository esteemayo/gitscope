import { LucideIcon } from 'lucide-react';
import { PrivacyPrincipleCTA } from '../index';

export interface PrivacyPrincipleProps {
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
