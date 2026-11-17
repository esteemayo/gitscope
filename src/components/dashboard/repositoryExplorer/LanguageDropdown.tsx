'use client';

import clsx from 'clsx';
import { Check } from 'lucide-react';

import DropdownMenu from './DropdownMenu';

import '../../../styles/components/dashboard/repositoryExplorer/LanguageDropdown.scss';

interface LanguageDropdownProps {
  value: string;
  label: string;
  isOpen: boolean;
  languages: string[];
  onToggle(): void;
  onChange(value: string): void;
  ariaLabel: string;
  className?: string;
  style?: React.CSSProperties;
}

const LanguageDropdown = ({
  value,
  label,
  isOpen,
  languages,
  onToggle,
  onChange,
  ariaLabel,
  className,
  style,
}: LanguageDropdownProps) => {
  return (
    <DropdownMenu
      label={label}
      isOpen={isOpen}
      onToggle={onToggle}
      ariaLabel={ariaLabel}
    >
      <div className={clsx('language-dropdown', className)} style={style}>
        <div className='language-dropdown__label'>Programming language</div>

        <button
          type='button'
          onClick={() => onChange('all')}
          className={clsx('language-dropdown__menu', {
            'language-dropdown__menu--active': value === 'all',
          })}
          role='option'
          aria-selected={value === 'all'}
        >
          <span className='language-dropdown__option'>
            <strong className='language-dropdown__option--label'>
              All languages
            </strong>

            <small className='language-dropdown__option--description'>
              Show every programming language
            </small>
          </span>

          {value === 'all' && (
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

        <div className='language-dropdown__divider' aria-hidden='true' />

        {languages.map((language) => (
          <button
            key={language}
            type='button'
            onClick={() => onChange(language)}
            className={clsx('language-dropdown__menu', {
              'language-dropdown__menu--active': value === language,
            })}
            role='option'
            aria-selected={value === language}
          >
            <span className='language-dropdown__option'>
              <strong className='language-dropdown__option--label'>
                {language}
              </strong>
            </span>

            {value === language && (
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
        ))}
      </div>
    </DropdownMenu>
  );
};

export default LanguageDropdown;
