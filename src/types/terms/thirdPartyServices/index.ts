import type { LucideIcon } from 'lucide-react';

export interface ThirdPartyServiceContent {
  badge: string;
  title: string;
  description: string;
  headerIcon?: LucideIcon | React.ComponentType;
  intro: string;
  accentColor?: string;
}

export interface ThirdPartyServiceType {
  id: string;
  name: string;
  category: string;
  purpose: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
  status: 'required' | 'integrated' | 'optional';
}

export interface ThirdPartyBoundaryType {
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}
