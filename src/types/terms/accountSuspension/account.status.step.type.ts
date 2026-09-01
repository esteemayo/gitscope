import { AccountStatusStepType } from './index';

export interface AccountStatusStepProps extends AccountStatusStepType {
  index: number;
  className?: string;
  style?: React.CSSProperties;
}
