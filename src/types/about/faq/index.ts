import type { LucideIcon } from 'lucide-react';

export interface FAQContent {
  badge: string;
  title: string;
  description: string;
  headerIcon?: LucideIcon | React.ComponentType;
  accentColor?: string;
}

export interface FAQItemData {
  id: string;
  question: string;
  answer: string;
}
