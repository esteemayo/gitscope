import { SecurityLayerItem } from './index';

export interface SecurityLayerProps extends SecurityLayerItem {
  isLast: boolean;
  className?: string;
  style?: React.CSSProperties;
}
