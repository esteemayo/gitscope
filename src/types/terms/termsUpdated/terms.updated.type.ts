import { TermsUpdatedContent, TermsUpdatedItemData } from './index';

export interface TermsUpdatedProps extends TermsUpdatedContent {
  items: TermsUpdatedItemData[];
  className?: string;
  style?: React.CSSProperties;
}
