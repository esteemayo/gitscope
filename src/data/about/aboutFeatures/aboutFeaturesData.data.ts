import { aboutFeaturesData } from './aboutFeatures.data';
import { aboutFeatureContent } from './aboutFeaturesContent.data';

import { AboutFeaturesProps } from '@/types/about/features/about.features.type';

export const aboutFeatureData: AboutFeaturesProps = {
  ...aboutFeatureContent,
  features: aboutFeaturesData,
};
