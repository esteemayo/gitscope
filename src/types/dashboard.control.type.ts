import { sortType, ViewType } from './index';

export interface DashboardControlsProps {
  sort: sortType;
  view: ViewType;
  onSort: React.Dispatch<React.SetStateAction<'stars' | 'forks' | 'size' | 'updated' | 'name'>>;
  onView: React.Dispatch<React.SetStateAction<'grid' | 'list'>>;
}
