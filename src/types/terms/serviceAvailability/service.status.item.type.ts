import { ServiceAvailabilityItemType } from './index';

export interface ServiceStatusItemProps extends ServiceAvailabilityItemType {
  index: number;
  className?: string;
  style?: React.CSSProperties;
}
