import { Variants } from 'framer-motion';

export interface HeroContentProps {
  badge?: string;
  title: string;
  description: string;
  primaryButtonLabel: string;
  secondaryButtonLabel: string;
  primaryButtonHref: string;
  secondaryButtonHref: string;
  itemVariants: Variants;
}
