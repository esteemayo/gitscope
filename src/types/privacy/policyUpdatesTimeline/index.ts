import { LucideIcon } from 'lucide-react';

export interface PolicyUpdate {
  id: string;
  version: string;
  date: string;
  title: string;
  description: string;
  changes: string[];
  icon: LucideIcon;
  accentColor: string;
  isCurrent?: boolean;
}

export interface PolicyUpdatesNoticeData {
  badge: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accentColor: string;
}
