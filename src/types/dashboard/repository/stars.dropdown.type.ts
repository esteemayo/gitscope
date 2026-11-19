import { StarOptionsType, StarRange } from './index';

export interface StarsDropdownProps {
  value: StarRange;
  label: string;
  isOpen: boolean;
  options: StarOptionsType[];
  onToggle(): void;
  onChange(value: StarRange): void;
  ariaLabel: string;
}
