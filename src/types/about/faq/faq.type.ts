import { FAQItemData } from '../index';

export interface FAQProps {
  badge: string;
  title: string;
  description: string;
  items: FAQItemData[];
}
