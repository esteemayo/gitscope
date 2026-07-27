import { PrivacyHeroStat } from './index';

export interface PrivacyHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  version?: string;
  summaryLink?: string;
  policyLink?: string;
  stats: PrivacyHeroStat[];
}
