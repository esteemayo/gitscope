import { IntellectualPropertyRuleType } from './index';

export interface IntellectualPropertyRuleProps extends IntellectualPropertyRuleType {
  index: number;
  className?: string;
  style?: React.CSSProperties;
}
