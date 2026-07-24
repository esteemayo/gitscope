import { Variants } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

export interface HeroCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  trend: string;
  accentColor: string;
  variants: Variants;
}
