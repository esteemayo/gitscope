'use client';

import clsx from 'clsx';
import { Check } from 'lucide-react';

import DropdownMenu from './DropdownMenu';
import { RepositoryType, TypeOptionsType } from '@/types/dashboard/repository';

import '../../../styles/components/dashboard/repositoryExplorer/RepositoryDropdown.scss';

interface RepositoryDropdownProps {
  repositoryValue: RepositoryType;
  label: string;
  isOpen: boolean;
  options: TypeOptionsType[];
  onToggle(): void;
  onChange(value: RepositoryType): void;
  ariaLabel: string;
  className?: string;
  style?: React.CSSProperties;
}

const RepositoryDropdown = ({
  repositoryValue,
  label,
  isOpen,
  options,
  onToggle,
  onChange,
  ariaLabel,
  className,
  style,
}: RepositoryDropdownProps) => {
  return (
    <DropdownMenu
      label={label}
      isOpen={isOpen}
      onToggle={onToggle}
      ariaLabel={ariaLabel}
    >
      <div className={clsx('repository-dropdown', className)} style={style}>
        <div className='repository-dropdown__label'>Repository type</div>

        {options.map((option) => {
          const { value, label, description } = option;

          return (
            <button
              key={value}
              type='button'
              onClick={() => onChange(value)}
              className={clsx('repository-dropdown__menu', {
                'repository-dropdown__menu--active': repositoryValue === value,
              })}
              role='option'
              aria-selected={repositoryValue === value}
            >
              <span className='repository-dropdown__option'>
                <strong className='repository-dropdown__option--label'>
                  {label}
                </strong>

                <small className='repository-dropdown__option--description'>
                  {description}
                </small>
              </span>

              {repositoryValue === value && (
                <Check
                  size={16}
                  strokeWidth={1.8}
                  className='selected-check'
                  role='img'
                  aria-hidden='true'
                  focusable='true'
                />
              )}
            </button>
          );
        })}
      </div>
    </DropdownMenu>
  );
};

export default RepositoryDropdown;
