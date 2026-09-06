import { Variants } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

export interface SectionIntroProps {
  id: string;
  badge: string;
  title: string;
  description: string;
  icon?: LucideIcon | React.ComponentType;
  accentColor?: string;
  align?: 'left' | 'center';
  variants: Variants;
}
