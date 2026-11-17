'use client';

import clsx from 'clsx';
import { ChevronDown, LucideIcon } from 'lucide-react';

import '../../../styles/components/dashboard/repositoryExplorer/DropdownMenu.scss';

interface DropdownMenuProps {
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

const DropdownMenu = ({
  label,
  isOpen,
  icon: Icon,
  filterCount,
  type,
  onToggle,
  children,
  ariaLabel,
  className = '',
  style,
}: DropdownMenuProps) => {
  return (
    <div className={clsx('dropdown-menu', className)} style={style}>
      <button
        type='button'
        onClick={onToggle}
        className={clsx('dropdown-menu__btn', {
          'dropdown-menu__btn--active': isOpen,
          'dropdown-menu__btn--filter': type === 'filter' || type === 'sort',
        })}
        aria-expanded={isOpen}
        aria-haspopup={
          type === 'filter' || type === 'sort' ? 'dialog' : 'listbox'
        }
      >
        {Icon && (
          <Icon
            size={16}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />
        )}

        <span>{label}</span>

        {filterCount && (
          <span className='dropdown-menu__btn--filter-count'>
            {filterCount}
          </span>
        )}

        <ChevronDown
          size={14}
          strokeWidth={1.8}
          className={isOpen ? 'chevron-open' : ''}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </button>

      {isOpen && (
        <div
          className='dropdown-menu__panel'
          role='dialog'
          aria-label={ariaLabel}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
