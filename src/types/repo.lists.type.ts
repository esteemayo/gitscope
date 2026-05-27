import { RepositoryType, SortType, ViewType } from './index';

export interface RepoListsProps {
  sort: SortType;
  view: ViewType;
  repos: RepositoryType[];
  onSort: React.Dispatch<React.SetStateAction<SortType>>;
  onView: React.Dispatch<React.SetStateAction<ViewType>>;
}
