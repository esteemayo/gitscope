'use client';

import clsx from 'clsx';
import { ChevronDown, LucideIcon } from 'lucide-react';

import '../../../styles/components/dashboard/repositoryExplorer/RepositoryDropdown.scss';

interface RepositoryDropdownProps {
  label: string;
  isOpen: boolean;
  icon?: LucideIcon;
  filterCount?: number;
  type?: 'filter' | 'sort';
  onToggle(): void;
  children: React.ReactNode;
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}

const RepositoryDropdown = ({
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
}: RepositoryDropdownProps) => {
  return (
    <div className={clsx('repository-dropdown', className)} style={style}>
      <button
        type='button'
        onClick={onToggle}
        className={clsx('repository-dropdown__btn', {
          'repository-dropdown__btn--active': isOpen,
          'repository-dropdown__btn--filter':
            type === 'filter' || type === 'sort',
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
          <span className='repository-dropdown__btn--filter-count'>
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
          className='repository-dropdown__panel'
          role='dialog'
          aria-label={ariaLabel}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default RepositoryDropdown;
