import { DeveloperAward } from './index';

export interface AwardCardProps extends DeveloperAward {
  className?: string;
  style?: React.CSSProperties;
}
