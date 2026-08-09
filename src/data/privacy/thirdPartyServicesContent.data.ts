import { thirdPartyServicesNotice } from './thirdPartyServicesNotice.data';
import { thirdPartyDataFlow } from './thirdPartyDataFlow.data';
import { ThirdPartyServicesProps } from '@/types/privacy/thirdPartyServices/third.party.services.type';
import { thirdPartyServices } from './thirdPartyServices.data';

export const thirdPartyServicesContent: ThirdPartyServicesProps = {
  badge: 'Third-party Services',
  title: 'How GitScope Works With External Services.',
  subtitle:
    'GitScope relies on a limited number of external services to provide authentication, access GitHub data, and support application functionality. Each integration has a defined purpose and follows the permissions granted to it.',
  services: thirdPartyServices,
  dataFlow: thirdPartyDataFlow,
  notice: thirdPartyServicesNotice,
};
