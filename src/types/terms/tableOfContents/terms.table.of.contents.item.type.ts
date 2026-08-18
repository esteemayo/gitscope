import { TermsContentsItem } from './index';

export interface TermsTableOfContentsItemProps extends TermsContentsItem {
  count: number;
  className?: string;
  style?: React.CSSProperties;
}
