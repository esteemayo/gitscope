import { Variants } from 'framer-motion';
import { FAQItemData } from '../index';

export interface FAQItemProps {
  isOpen: boolean;
  item: FAQItemData;
  variants: Variants;
  onToggle(id: string): void;
}
