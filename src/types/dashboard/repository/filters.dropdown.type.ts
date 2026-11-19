import { type LucideIcon } from 'lucide-react';
import { AdvancedFilters } from './index';

export interface FiltersDropdownProps {
  label: string;
  isOpen: boolean;
  icon?: LucideIcon;
  filterCount?: number;
  type?: 'filter' | 'sort';
  onToggle(): void;
  onClose(): void;
  onToggleAdvancedFilter(key: keyof AdvancedFilters): void;
  onResetAdvancedFilter(): void;
  ariaLabel: string;
  className?: string;
  style?: React.CSSProperties;
}
