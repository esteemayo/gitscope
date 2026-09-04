import type { LucideIcon } from 'lucide-react';

export interface AboutTeamContent {
  badge: string;
  title: string;
  description: string;
  headerIcon?: LucideIcon | React.ComponentType;
  intro: string;
  accentColor?: string;
}

export interface TeamFocusType {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accentColor: string;
}

export interface TeamMemberType {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  accentColor: string;
}

export interface TeamVisualData {
  image: string;
  imageAlt: string;
  eyebrow: string;
  label: string;
  accentColor: string;
}
