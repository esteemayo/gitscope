import { ChangeLifecycleStepData } from './index';

export interface ChangeLifecycleStepProps extends ChangeLifecycleStepData {
  index: number;
  isLast: boolean;
  className?: string;
  style?: React.CSSProperties;
}
