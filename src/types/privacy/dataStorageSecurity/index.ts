import { LucideIcon } from 'lucide-react';

export interface SecurityTrustItem {
  id: string;
  label: string;
}

export interface SecurityOverviewItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}

export interface SecurityHighlight {
  id: string;
  label: string;
}

export interface SecuritySummary {
  title: string;
  description: string;
}

export interface SecurityFeature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
  category: string;
  highlightsTitle: string;
  highlights: SecurityHighlight[];
  summary: SecuritySummary;
}

export interface SecurityLayerItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}

export interface TrustBanner {
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}
