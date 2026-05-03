import { SortType } from './index';

export interface MenuButtonProps {
  isOpen: boolean;
  sort: SortType;
  onOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
