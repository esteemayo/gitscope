import { ShareStepType } from './index';

export interface ShareStepProps extends ShareStepType {
  index: number;
  className?: string;
  style?: React.CSSProperties;
}
