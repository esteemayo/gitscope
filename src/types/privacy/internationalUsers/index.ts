import { LucideIcon } from 'lucide-react';

export interface InternationalUserPoint {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface InternationalUsersPanelData {
  status: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accentColor: string;
  points: InternationalUserPoint[];
}

export interface InternationalUsersNoticeData {
  badge: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accentColor: string;
}
