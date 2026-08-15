import * as data from './informationCollected.data';
import { informationCollectedContent } from './informationCollectedContent.data';

import { InformationCollectedProps } from '@/types/privacy/information/information.collected.type';

export const informationCollectedData: InformationCollectedProps = {
  ...informationCollectedContent,
  stats: data.informationCollectedStats,
  categories: data.informationCollected,
};
