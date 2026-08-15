import { usageSteps } from './privacyUsage.data';
import { privacyUsageContent } from './privacyUsageContent.data';

import { HowWeUseYourInformationProps } from '@/types/privacy/howWeUseYourInfo/how.we.use.your.information.type';

export const privacyUsageData: HowWeUseYourInformationProps = {
  ...privacyUsageContent,
  steps: usageSteps,
};
