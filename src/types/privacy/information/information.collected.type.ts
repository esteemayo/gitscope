import { CollectionCategoryItem, InformationCollectedStats } from './index';

export interface InformationCollectedProps {
  badge: string;
  title: string;
  subtitle: string;
  stats: InformationCollectedStats[];
  categories: CollectionCategoryItem[];
}
