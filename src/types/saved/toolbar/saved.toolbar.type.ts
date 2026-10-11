import { SavedView, SortDirection, SortField } from '../index';

export interface SavedToolbarProps {
  view: SavedView;
  searchQuery: string;
  sortField: SortField;
  sortDirection: SortDirection;
  onSearchChange: React.Dispatch<React.SetStateAction<string>>;
  onViewChange: React.Dispatch<React.SetStateAction<SavedView>>;
  onSortFieldChange(field: SortField): void;
  onSortDirectionChange(direction: SortDirection): void;
}
