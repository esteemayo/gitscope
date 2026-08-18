import { LucideIcon } from 'lucide-react';

export interface TermsAcceptanceContent {
  badge: string;
  title: string;
  description: string;
  headerIcon?: LucideIcon | React.ComponentType;
  intro: string;
  agreementTitle: string;
  agreementDescription: string;
  agreementAccentColor: string;
}

export interface TermsAcceptancePointData {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}
