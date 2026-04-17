export type ViewType = 'grid' | 'list';
export type SortType = 'stars' | 'forks' | 'size' | 'updated' | 'name';

export type SortItemType = {
  id: SortType;
  label: string;
}
