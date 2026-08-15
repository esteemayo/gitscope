import { LucideIcon } from 'lucide-react';

export type PermisssionStatus = 'required' | 'optional' | 'never';

export interface GrantedAccessItem {
  id: string;
  label: string;
}

export interface PermissionItem {
  id: string;
  title: string;
  description: string;
  whyWeNeedIt: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
  status: PermisssionStatus;
  grantedAccess: GrantedAccessItem[];
  summary: string;
}

export interface PermissionOverviewItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}
