import { ThirdPartyServiceType } from './index';

export interface ThirdPartyServiceProps extends ThirdPartyServiceType {
  index: number;
  className?: string;
  style?: React.CSSProperties;
}
