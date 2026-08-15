import { LucideIcon } from 'lucide-react';

export interface InformationCollectedStats {
  id: string;
  label: string;
  value: string;
}

export interface CollectionCategoryItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  accentColor: string;
  items: string[];
  optional?: boolean;
}
