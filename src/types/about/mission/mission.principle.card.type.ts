import { MissionPrinciple } from './index';

export interface MissionPrincipleCardProps extends MissionPrinciple {
  index: number;
  className?: string;
  style?: React.CSSProperties;
}
