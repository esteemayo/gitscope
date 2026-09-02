import {
  ChangeLifecycleStepData,
  ChangeReasonType,
  ChangesToTermsContent,
  UserOptionType,
} from './index';

export interface ChangesToTermsProps extends ChangesToTermsContent {
  reasons: ChangeReasonType[];
  lifecycle: ChangeLifecycleStepData[];
  options: UserOptionType[];
  className?: string;
  style?: React.CSSProperties;
}
