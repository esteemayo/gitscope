import {
  AccountStatusStepType,
  AccountSuspensionContent,
  EnforcementNoticeData,
  SuspensionReasonType,
} from './index';

export interface AccountSuspensionProps extends AccountSuspensionContent {
  statusSteps: AccountStatusStepType[];
  reasons: SuspensionReasonType[];
  notice: EnforcementNoticeData;
  className?: string;
  style?: React.CSSProperties;
}
