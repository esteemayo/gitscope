import { LucideIcon } from 'lucide-react';

export interface ChildrenPrivacyPoint {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ChildrenPrivacyPanelData {
  status: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accentColor: string;
  points: ChildrenPrivacyPoint[];
}

export interface ChildrenPrivacyNoticeData {
  badge: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accentColor: string;
}
