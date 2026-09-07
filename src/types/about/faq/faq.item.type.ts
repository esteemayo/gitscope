import { Variants } from 'framer-motion';
import { FAQItemData } from './index';

export interface FAQItemProps extends FAQItemData {
  isOpen: boolean;
  variants: Variants;
  onToggle(id: string): void;
}
