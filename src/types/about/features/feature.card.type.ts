import { AboutFeature } from './index';

export interface FeatureCardProps extends AboutFeature {
  index: number;
  className?: string;
  style?: React.CSSProperties;
}
