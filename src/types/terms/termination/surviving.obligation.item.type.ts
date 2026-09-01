import { SurvivingObligationType } from './index';

export interface SurvivingObligationItemProps extends SurvivingObligationType {
  index: number;
  className?: string;
  style?: React.CSSProperties;
}
