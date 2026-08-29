import * as data from './thirdPartyServices.data';
import { thirdPartyServiceContent } from './thirdPartyServicesContent.data';

import { ThirdPartyServicesProps } from '@/types/terms/thirdPartyServices/third.party.services.type';

export const thirdPartyServicesData: ThirdPartyServicesProps = {
  ...thirdPartyServiceContent,
  services: data.thirdPartyServices,
  boundaries: data.thirdPartyBoundaries,
};
