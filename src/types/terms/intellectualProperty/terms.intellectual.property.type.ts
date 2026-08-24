import {
  IntellectualPropertyContent,
  IntellectualPropertyLayerType,
  IntellectualPropertyNoticeType,
  IntellectualPropertyRuleType,
} from './index';

export interface TermsIntellectualPropertyProps extends IntellectualPropertyContent {
  layers: IntellectualPropertyLayerType[];
  rules: IntellectualPropertyRuleType[];
  notice: IntellectualPropertyNoticeType;
  className?: string;
  style?: React.CSSProperties;
}
