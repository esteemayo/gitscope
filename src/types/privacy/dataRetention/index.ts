import { LucideIcon } from 'lucide-react';

export interface RetentionStat {
  id: string;
  value: string;
  label: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}

export interface RetentionCategory {
  id: string;
  title: string;
  description: string;
  retention: string;
  reason: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}

export interface RetentionNoticeData {
  badge: string;
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}
