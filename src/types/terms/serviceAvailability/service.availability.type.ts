import {
  ServiceAvailabilityConditionType,
  ServiceAvailabilityContent,
  ServiceAvailabilityItemType,
  ServiceLimitationNoticeType,
} from './index';

export interface ServiceAvailabilityProps extends ServiceAvailabilityContent {
  services: ServiceAvailabilityItemType[];
  conditions: ServiceAvailabilityConditionType[];
  notice: ServiceLimitationNoticeType;
  className?: string;
  style?: React.CSSProperties;
}
