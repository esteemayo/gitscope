import {
  ThirdPartyDataFlow,
  ThirdPartyNoticeData,
  ThirdPartyService,
} from './index';

export interface ThirdPartyServicesProps {
  badge: string;
  title: string;
  subtitle: string;
  services: ThirdPartyService[];
  dataFlow: ThirdPartyDataFlow;
  notice: ThirdPartyNoticeData;
  className?: string;
  style?: React.CSSProperties;
}
