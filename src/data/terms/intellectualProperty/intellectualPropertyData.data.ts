import * as data from './intellectualProperty.data';
import { intellectualPropertyContent } from './intellectualPropertyContent.data';

import { TermsIntellectualPropertyProps } from '@/types/terms/intellectualProperty/terms.intellectual.property.type';

export const intellectualPropertyData: TermsIntellectualPropertyProps = {
  ...intellectualPropertyContent,
  layers: data.intellectualPropertyLayers,
  rules: data.intellectualPropertyRules,
  notice: data.intellectualPropertyNotices,
};
