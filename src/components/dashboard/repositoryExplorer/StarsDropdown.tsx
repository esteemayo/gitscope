'use client';

import clsx from 'clsx';
import { Check } from 'lucide-react';

import DropdownMenu from './DropdownMenu';
import { StarOptionsType, StarRange } from '@/types/dashboard/repository';

import '../../../styles/components/dashboard/repositoryExplorer/StarsDropdown.scss';

interface StarsDropdownProps {
  starValue: StarRange;
  label: string;
  isOpen: boolean;
  options: StarOptionsType[];
  onToggle(): void;
  onChange(value: StarRange): void;
  ariaLabel: string;
  className?: string;
  style?: React.CSSProperties;
}

const StarsDropdown = ({
  starValue,
  label,
  isOpen,
  options,
  onToggle,
  onChange,
  ariaLabel,
  className,
  style,
}: StarsDropdownProps) => {
  return (
    <DropdownMenu
      label={label}
      isOpen={isOpen}
      onToggle={onToggle}
      ariaLabel={ariaLabel}
    >
      <div className={clsx('stars-dropdown', className)} style={style}>
        <div className='stars-dropdown__label'>Star count</div>

        {options.map((option) => {
          const { value, label, description } = option;

          return (
            <button
              key={value}
              type='button'
              onClick={() => onChange(value)}
              className={clsx('stars-dropdown__menu', {
                'stars-dropdown__menu--active': starValue === value,
              })}
              role='option'
              aria-selected={starValue === value}
            >
              <span className='stars-dropdown__option'>
                <strong className='stars-dropdown__option--label'>
                  {label}
                </strong>

                <small className='stars-dropdown__option--description'>
                  {description}
                </small>
              </span>

              {starValue === value && (
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

export default StarsDropdown;
