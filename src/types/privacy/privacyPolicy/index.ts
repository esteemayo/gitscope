import { LucideIcon } from 'lucide-react';

export interface PrivacyFAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface PrivacyFAQCategory {
  id: string;
  label: string;
  icon: LucideIcon | React.ComponentType;
  questions: PrivacyFAQItem[];
}

export interface PrivacyFAQNotice {
  badge: string;
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}
