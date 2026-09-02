import type { LucideIcon } from 'lucide-react';

export interface ChangesToTermsContent {
  badge: string;
  title: string;
  description: string;
  headerIcon?: LucideIcon | React.ComponentType;
  intro: string;
  accentColor?: string;
}

export interface ChangeReasonType {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}

export interface ChangeLifecycleStepData {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}

export interface UserOptionType {
  id: string;
  title: string;
  description: string;
  action: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}
