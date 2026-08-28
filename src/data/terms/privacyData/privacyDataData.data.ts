import * as data from './privacyData.data';
import { privacyDataContent } from './privacyDataContent.data';

import { TermsPrivacyDataProps } from '@/types/terms/privacyData/terms.privacy.data.type';

export const privacyDataData: TermsPrivacyDataProps = {
  ...privacyDataContent,
  controls: data.privacyDataControls,
  principles: data.privacyDataPrinciples,
  dataCategories: data.privacyDataCategories,
  notice: data.privacyDataNotice,
};
