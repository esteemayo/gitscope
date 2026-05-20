import { SortType, ViewType } from './index';

export interface DashboardControlsProps {
  sort: SortType;
  onSort: React.Dispatch<React.SetStateAction<SortType>>;
  onView: React.Dispatch<React.SetStateAction<ViewType>>;
}
