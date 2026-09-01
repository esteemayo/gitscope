import { TerminationEffectType } from './index';

export interface TerminationEffectItemProps extends TerminationEffectType {
  index: number;
  className?: string;
  style?: React.CSSProperties;
}
