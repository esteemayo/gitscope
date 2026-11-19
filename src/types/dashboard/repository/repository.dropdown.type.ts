import { RepositoryType, TypeOptionsType } from './index';

export interface RepositoryDropdownProps {
  value: RepositoryType;
  label: string;
  isOpen: boolean;
  options: TypeOptionsType[];
  onToggle(): void;
  onChange(value: RepositoryType): void;
  ariaLabel: string;
}
