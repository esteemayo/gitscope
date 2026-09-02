import type { LucideIcon } from 'lucide-react';

export interface GoverningLawContent {
  badge: string;
  title: string;
  description: string;
  headerIcon?: LucideIcon | React.ComponentType;
  intro: string;
  accentColor?: string;
}

export interface JurisdictionPanelData {
  label: string;
  jurisdiction: string;
  title: string;
  description: string;
  notice: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}

export interface LegalPrincipleType {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}

export interface DisputeResolutionData {
  label: string;
  title: string;
  description: string;
  points: string[];
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}
