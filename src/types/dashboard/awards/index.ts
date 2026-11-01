export type AwardStatus = 'earned' | 'locked' | 'unavailable';

export type AwardIcon = 'star' | 'code' | 'users' | 'calendar' | 'languages';

export interface DeveloperAward {
  id: string;
  name: string;
  description: string;
  requirement: string;
  icon: AwardIcon;
  status: AwardStatus;
  progress: number;
  progressLabel: string;
  accentColor: string;
}

export interface AwardDefinition {
  id: string;
  name: string;
  description: string;
  requirement: string;
  icon: AwardIcon;
  threshold: number;
  accentColor: string;
}
