import { SecurityFeature } from './index';

export interface SecurityCardProps extends SecurityFeature {
  index: number;
  className?: string;
  style?: React.CSSProperties;
}
