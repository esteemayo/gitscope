import { SortType } from './index';

export interface DropdownMenuProps {
  isOpen: boolean;
  onOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSort: React.Dispatch<React.SetStateAction<SortType>>;
}
