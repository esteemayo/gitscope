import { ComparisonItem, WhyGitScopeContent, WhyItem } from './index';

export interface WhyGitScopeProps extends WhyGitScopeContent {
  values: WhyItem[];
  comparison: ComparisonItem[];
  className?: string;
  style?: React.CSSProperties;
}
