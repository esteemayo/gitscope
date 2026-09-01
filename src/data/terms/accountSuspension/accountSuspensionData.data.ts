import * as data from './accountSuspension.data';
import { accountSuspensionContent } from './accountSuspensionContent.data';

import { AccountSuspensionProps } from '@/types/terms/accountSuspension/account.suspension.type';

export const accountSuspensionData: AccountSuspensionProps = {
  ...accountSuspensionContent,
  statusSteps: data.accountSuspensionStatusSteps,
  reasons: data.accountSuspensionReasons,
  notice: data.accountSuspensionNotice,
};
