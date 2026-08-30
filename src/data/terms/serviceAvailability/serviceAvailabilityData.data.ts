import * as data from './serviceAvailability.data';
import { serviceAvailabilityContent } from './serviceAvailabilityContent.data';

import { ServiceAvailabilityProps } from '@/types/terms/serviceAvailability/service.availability.type';

export const serviceAvailabilityData: ServiceAvailabilityProps = {
  ...serviceAvailabilityContent,
  services: data.serviceAvailabilityServices,
  conditions: data.serviceAvailabilityConditions,
  notice: data.serviceAvailabilityNotice,
};
