import {
  ThirdPartyBoundaryType,
  ThirdPartyServiceContent,
  ThirdPartyServiceType,
} from './index';

export interface ThirdPartyServicesProps extends ThirdPartyServiceContent {
  services: ThirdPartyServiceType[];
  boundaries: ThirdPartyBoundaryType[];
  className?: string;
  style?: React.CSSProperties;
}
