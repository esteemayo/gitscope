'use client';

import clsx from 'clsx';
import { Check } from 'lucide-react';

import { DropdownOption } from '@/types/dashboard/repository';
import '../../../styles/components/dashboard/repositoryExplorer/DropdownOptions.scss';

interface DropdownOptionsProps<T extends string> {
  label: string;
  value: T;
  options: DropdownOption<T>[];
  onChange(value: T): void;
  className?: string;
  style?: React.CSSProperties;
}

const DropdownOptions = <T extends string>({
  label,
  value,
  options,
  onChange,
  className = '',
  style,
}: DropdownOptionsProps<T>) => {
  return (
    <div className={clsx('dropdown-options', className)} style={style}>
      <div className='dropdown-options__label'>{label}</div>

      {options.map((option) => {
        const { value: optionValue, label, description } = option;

        return (
          <button
            key={optionValue}
            type='button'
            onClick={() => onChange(optionValue)}
            className={clsx('dropdown-options__menu', {
              'dropdown-options__menu--active': value === optionValue,
            })}
            role='option'
            aria-selected={value === optionValue}
          >
            <span className='dropdown-options__option'>
              <strong className='dropdown-options__option--label'>
                {label}
              </strong>

              <small className='dropdown-options__option--description'>
                {description}
              </small>
            </span>

            {value === optionValue && (
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
  );
};

export default DropdownOptions;
