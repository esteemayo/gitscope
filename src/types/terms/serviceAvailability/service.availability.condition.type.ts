import { ServiceAvailabilityConditionType } from './index';

export interface ServiceAvailabilityConditionProps extends ServiceAvailabilityConditionType {
  index: number;
  className?: string;
  style?: React.CSSProperties;
}
