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

export interface DocsHomeSectionContent {
  id: string;
  label: string;
  title: string;
  description: string;
  className?: 'compact';
}

export interface QuickStartDataType {
  content: DocsHomeSectionContent;
  cards: DocsCardType[];
}

export interface HowItWorksDataType {
  content: DocsHomeSectionContent;
  steps: DocsStepType[];
}

export interface DocsHomeNextContent {
  id: string;
  label: string;
  title: string;
  cta: {
    href: string;
    label: string;
  };
}

export type DocsHomeNextType = DocsHomeNextContent;
