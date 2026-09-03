import type { LucideIcon } from 'lucide-react';

export interface ContactContent {
  badge: string;
  title: string;
  description: string;
  headerIcon?: LucideIcon | React.ComponentType;
  intro: string;
  accentColor?: string;
}

export interface ContactChannelType {
  id: string;
  label: string;
  value: string;
  description: string;
  href: string;
  icon: LucideIcon;
  accentColor: string;
}

export interface ContactTopicType {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accentColor: string;
}

export interface ResponseExpectationType {
  id: string;
  label: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accentColor: string;
}
