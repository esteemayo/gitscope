import { ArchitectureFeature } from './index';

export interface ArchitectureCardProps extends ArchitectureFeature {
  index: number;
  className?: string;
  style?: React.CSSProperties;
}
