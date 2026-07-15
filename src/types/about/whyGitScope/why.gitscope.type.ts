import { ComparisonItem, WhyItem } from '../index';

export interface WhyGitScopeProps {
  badge: string;
  title: string;
  description: string;
  values: WhyItem[];
  comparison: ComparisonItem[];
}
