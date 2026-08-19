import type { LucideIcon } from 'lucide-react';

export interface TermsEligibilityContent {
  badge: string;
  title: string;
  description: string;
  headerIcon: LucideIcon | React.ComponentType;
  intro: string;
  accentColor: string;
}

export interface TermsEligibilityItemData {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}
