import { TermsContentsContentData, TermsContentsItem } from './index';

export interface TermsTableOfContentsProps extends TermsContentsContentData {
  items: TermsContentsItem[];
  className?: string;
  style?: React.CSSProperties;
}
