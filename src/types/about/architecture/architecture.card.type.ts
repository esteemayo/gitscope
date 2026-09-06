import { Variants } from 'framer-motion';
import { ArchitectureFeature } from './index';

export interface ArchitectureCardProps extends ArchitectureFeature {
  variants: Variants;
  className?: string;
  style?: React.CSSProperties;
}
