import { TermsUpdatedItemData } from './index';

export interface TermsUpdatedItemProps extends TermsUpdatedItemData {
  index: number;
  className?: string;
  style?: React.CSSProperties;
}
