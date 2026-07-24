import { Variants } from 'framer-motion';

export interface AboutSectionHeaderProps {
  id: string;
  badge: string;
  title: string;
  description: string;
  centered?: boolean;
  variants: Variants;
}
