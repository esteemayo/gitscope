import { SortDirection, SortField } from '../index';

export interface SavedProfilesSortProps {
  sortField: SortField;
  sortDirection: SortDirection;
  onSortFieldChange(field: SortField): void;
  onSortDirectionChange(direction: SortDirection): void;
}
