import { PrivacySummaryItem } from './index';

export interface PrivacySummaryProps {
  badge: string;
  title: string;
  subtitle: string;
  items: PrivacySummaryItem[];
}
