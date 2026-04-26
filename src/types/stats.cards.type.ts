import { SortType } from './index';

export interface StatsCardsProps {
  sort: SortType;
  onSort: React.Dispatch<React.SetStateAction<SortType>>;
}
