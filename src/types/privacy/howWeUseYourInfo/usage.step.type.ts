import { UsageStepItem } from '../index';

export interface UsageStepProps extends UsageStepItem {
  active: boolean;
  className?: string;
  style?: React.CSSProperties;
  onClick(): void;
}
