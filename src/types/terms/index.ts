import { Variants } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

export interface TermsSectionHeaderProps {
  id: string;
  badge: string;
  title: string;
  description: string;
  icon?: LucideIcon | React.ComponentType;
  accentColor?: string;
  align?: 'left' | 'center';
  variants: Variants;
}
