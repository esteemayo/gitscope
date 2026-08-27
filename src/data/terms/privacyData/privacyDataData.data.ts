import * as data from './privacyData.data';
import { privacyDataContent } from './privacyDataContent.data';

export const privacyDataData = {
  ...privacyDataContent,
  controls: data.privacyDataControls,
  principles: data.privacyDataPrinciples,
  dataCategories: data.privacyDataCategories,
  notice: data.privacyDataNotice,
};
