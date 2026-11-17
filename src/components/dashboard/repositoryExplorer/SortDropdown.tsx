'use client';

import clsx from 'clsx';
import { Check, LucideIcon } from 'lucide-react';

import DropdownMenu from './DropdownMenu';
import { RepositorySort, SortOptionsType } from '@/types/dashboard/repository';

import '../../../styles/components/dashboard/repositoryExplorer/SortDropdown.scss';

interface SortDropdownProps {
  label: string;
  isOpen: boolean;
  sortValue: RepositorySort;
  options: SortOptionsType[];
  icon?: LucideIcon;
  type?: 'filter' | 'sort';
  onToggle(): void;
  onChange(value: RepositorySort): void;
  ariaLabel: string;
  className?: string;
  style?: React.CSSProperties;
}

const SortDropdown = ({
  label,
  isOpen,
  sortValue,
  options,
  icon,
  type,
  onToggle,
  onChange,
  ariaLabel,
  className,
  style,
}: SortDropdownProps) => {
  return (
    <DropdownMenu
      label={label}
      isOpen={isOpen}
      icon={icon}
      type={type}
      onToggle={onToggle}
      ariaLabel={ariaLabel}
    >
      <div className={clsx('sort-dropdown', className)} style={style}>
        <div className='sort-dropdown__label'>Sort by</div>

        {options.map((option) => {
          const { value, label, description } = option;

          return (
            <button
              key={value}
              type='button'
              onClick={() => onChange(value)}
              className={clsx('sort-dropdown__menu', {
                'sort-dropdown__menu--active': sortValue === value,
              })}
              role='option'
              aria-selected={sortValue === value}
            >
              <span className='sort-dropdown__option'>
                <strong className='sort-dropdown__option--label'>
                  {label}
                </strong>

                <small className='sort-dropdown__option--description'>
                  {description}
                </small>
              </span>

              {sortValue === value && (
                <Check
                  size={16}
                  strokeWidth={1.8}
                  className='selected-check'
                  role='img'
                  aria-hidden='true'
                  focusable='false'
                />
              )}
            </button>
          );
        })}
      </div>
    </DropdownMenu>
  );
};

export default SortDropdown;
