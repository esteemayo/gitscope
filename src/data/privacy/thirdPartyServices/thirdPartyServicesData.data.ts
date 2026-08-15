import * as data from './thirdPartyServices.data';
import { thirdPartyServicesContent } from './thirdPartyServicesContent.data';

import { ThirdPartyServicesProps } from '@/types/privacy/thirdPartyServices/third.party.services.type';

export const thirdPartyServicesData: ThirdPartyServicesProps = {
  ...thirdPartyServicesContent,
  services: data.thirdPartyServices,
  dataFlow: data.thirdPartyDataFlow,
  notice: data.thirdPartyServicesNotice,
};
