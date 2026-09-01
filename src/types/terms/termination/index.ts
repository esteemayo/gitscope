import type { LucideIcon } from 'lucide-react';

export interface TerminationContent {
  badge: string;
  title: string;
  description: string;
  headerIcon?: LucideIcon | React.ComponentType;
  intro: string;
  accentColor?: string;
}

export type TerminationPathType = 'user' | 'platform';

export interface TerminationPathData {
  id: TerminationPathType;
  label: string;
  title: string;
  description: string;
  action: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}

export interface TerminationEffectType {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}

export interface SurvivingObligationType {
  id: string;
  title: string;
  description: string;
  accentColor: string;
}
