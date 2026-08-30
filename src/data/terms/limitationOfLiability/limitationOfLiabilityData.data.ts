import * as data from './limitationOfLiability.data';
import { limitationOfLiabilityContent } from './limitationOfLiabilityContent.data';

import { LimitationOfLiabilityProps } from '@/types/terms/limitationOfLiability/limitation.of.liability.type';

export const limitationOfLiabilityData: LimitationOfLiabilityProps = {
  ...limitationOfLiabilityContent,
  exclusions: data.limitationOfLiabilityExclusions,
  liabilityCap: data.limitationOfLiabilityCap,
};
