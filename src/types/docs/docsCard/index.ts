import type { LucideIcon } from 'lucide-react';

export interface DocsCardType {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}

export interface DocsStepType {
  id: string;
  label: string;
  description: string;
  accentColor: string;
}
