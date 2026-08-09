import { LucideIcon } from 'lucide-react';

export interface ThirdPartyService {
  id: string;
  name: string;
  category: string;
  description: string;
  purpose: string;
  dataShared: string;
  requirement: 'Required' | 'Optional';
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}

export interface ThirdPartyDataFlowStep {
  id: string;
  label: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
}

export interface ThirdPartyDataFlow {
  badge: string;
  title: string;
  description: string;
  steps: ThirdPartyDataFlowStep[];
}

export interface ThirdPartyNoticeData {
  badge: string;
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
  points: string[];
}
