import { type LucideIcon } from 'lucide-react';

export interface DropdownMenuProps {
  label: string;
  isOpen: boolean;
  icon?: LucideIcon;
  filterCount?: number;
  type?: 'filter' | 'sort';
  onToggle(): void;
  children: React.ReactNode;
  ariaLabel: string;
  className?: string;
  style?: React.CSSProperties;
}
