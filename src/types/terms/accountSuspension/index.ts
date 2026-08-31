import type { LucideIcon } from 'lucide-react';

export interface AccountSuspensionContent {
  badge: string;
  title: string;
  description: string;
  headerIcon?: LucideIcon | React.ComponentType;
  intro: string;
  accentColor?: string;
}

export type AccountStatus =
  | 'active'
  | 'review'
  | 'restricted'
  | 'suspended'
  | 'terminated';

export interface AccountStatusStepType {
  id: AccountStatus;
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}

export interface SuspensionReasonType {
  id: string;
  label: string;
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}

export interface EnforcementNoticeData {
  title: string;
  description: string;
  points: string[];
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}
