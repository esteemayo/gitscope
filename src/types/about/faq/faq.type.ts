import { FAQContent, FAQItemData } from './index';

export interface FAQProps extends FAQContent {
  items: FAQItemData[];
  className?: string;
  style?: React.CSSProperties;
}
