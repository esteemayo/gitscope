import type { LucideIcon } from 'lucide-react';

export interface ServiceAvailabilityContent {
  badge: string;
  title: string;
  description: string;
  headerIcon?: LucideIcon | React.ComponentType;
  intro: string;
  accentColor?: string;
}

export type ServiceAvailabilityStatus =
  | 'operational'
  | 'dependent'
  | 'variable';

export interface ServiceAvailabilityItemType {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  status: ServiceAvailabilityStatus;
  accentColor: string;
}

export interface ServiceAvailabilityConditionType {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}

export interface ServiceLimitationNoticeType {
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}
