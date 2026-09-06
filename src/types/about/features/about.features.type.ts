import { AboutFeature, AboutFeatureContent } from './index';

export interface AboutFeaturesProps extends AboutFeatureContent {
  features: AboutFeature[];
  className?: string;
  style?: React.CSSProperties;
}
