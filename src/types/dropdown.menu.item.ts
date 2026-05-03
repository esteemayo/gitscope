import { SortType } from './index';

export interface DropdownMenuItemProps {
  id: SortType;
  ref: React.Ref<HTMLButtonElement> | undefined;
  label: string;
  index: number;
  onSort: React.Dispatch<React.SetStateAction<SortType>>;
  onKeyDown(e: React.KeyboardEvent<HTMLButtonElement>, index: number): void;
}
