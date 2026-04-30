import { SortType, ViewType } from './index';

export interface RepoListsProps {
  sort: SortType;
  view: ViewType;
  onSort: React.Dispatch<React.SetStateAction<SortType>>;
  onView: React.Dispatch<React.SetStateAction<ViewType>>;
}
