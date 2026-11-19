'use client';

import clsx from 'clsx';
import { Archive, ArrowUpDown, Check, CircleDot, X } from 'lucide-react';

import DropdownMenu from './DropdownMenu';
import { FiltersDropdownProps } from '@/types/dashboard/repository/filters.dropdown.type';

import '../../../styles/components/dashboard/repositoryExplorer/FiltersDropdown.scss';

const FiltersDropdown = ({
  label,
  isOpen,
  icon,
  filterCount,
  type,
  onToggle,
  onClose,
  onToggleAdvancedFilter,
  onResetAdvancedFilter,
  ariaLabel,
  className,
  style,
}: FiltersDropdownProps) => {
  return (
    <DropdownMenu
      label={label}
      isOpen={isOpen}
      icon={icon}
      filterCount={filterCount}
      type={type}
      onToggle={onToggle}
      ariaLabel={ariaLabel}
    >
      <div className={clsx('filters-dropdown', className)} style={style}>
        <div className='filters-dropdown__header'>
          <div className='filters-dropdown__heading'>
            <h4 className='filters-dropdown__heading--title'>
              Advanced filters
            </h4>

            <p className='filters-dropdown__heading--description'>
              Refine your repository results.
            </p>
          </div>

          <button
            type='button'
            onClick={onClose}
            className='filters-dropdown__btn-close'
            aria-label='Close filters'
          >
            <X
              size={15}
              strokeWidth={1.8}
              role='img'
              aria-hidden='true'
              focusable='false'
            />
          </button>
        </div>

        <div className='filters-dropdown__filter-options'>
          <label
            htmlFor='description'
            className='filters-dropdown__checkbox-option'
          >
            <div className='filters-dropdown__checkbox-content'>
              <span className='filters-dropdown__option-icon'>
                <Archive
                  size={15}
                  strokeWidth={1.8}
                  role='img'
                  aria-hidden='true'
                  focusable='false'
                />
              </span>

              <div>
                <strong>Has description</strong>

                <small>Only show documented repositories</small>
              </div>
            </div>

            <input
              type='checkbox'
              name='description'
              id='description'
              onChange={() => onToggleAdvancedFilter('hasDescription')}
            />

            <span className='filters-dropdown__custom-checkbox'>
              <Check
                size={12}
                strokeWidth={1.8}
                role='img'
                aria-hidden='true'
                focusable='false'
              />
            </span>
          </label>

          <label htmlFor='topics' className='filters-dropdown__checkbox-option'>
            <div className='filters-dropdown__checkbox-content'>
              <span className='filters-dropdown__option-icon'>
                <CircleDot
                  size={15}
                  strokeWidth={1.8}
                  role='img'
                  aria-hidden='true'
                  focusable='false'
                />
              </span>

              <div>
                <strong>Has topics</strong>

                <small>Only show repositories with topics</small>
              </div>
            </div>

            <input
              type='checkbox'
              name='topics'
              id='topics'
              onChange={() => onToggleAdvancedFilter('hasTopics')}
            />

            <span className='filters-dropdown__custom-checkbox'>
              <Check
                size={12}
                strokeWidth={1.8}
                role='img'
                aria-hidden='true'
                focusable='false'
              />
            </span>
          </label>

          <label
            htmlFor='recently'
            className='filters-dropdown__checkbox-option'
          >
            <div className='filters-dropdown__checkbox-content'>
              <span className='filters-dropdown__option-icon'>
                <ArrowUpDown
                  size={15}
                  strokeWidth={1.8}
                  role='img'
                  aria-hidden='true'
                  focusable='false'
                />
              </span>

              <div>
                <strong>Recently active</strong>

                <small>Updated within the last 30 days</small>
              </div>
            </div>

            <input
              type='checkbox'
              name='recently'
              id='recently'
              onChange={() => onToggleAdvancedFilter('recentlyActive')}
            />

            <span className='filters-dropdown__custom-checkbox'>
              <Check
                size={12}
                strokeWidth={1.8}
                role='img'
                aria-hidden='true'
                focusable='false'
              />
            </span>
          </label>
        </div>

        <div className='filters-dropdown__footer'>
          <button
            type='button'
            onClick={onResetAdvancedFilter}
            className='filters-dropdown__footer--btn-reset'
          >
            Reset
          </button>

          <button
            type='button'
            onClick={onClose}
            className='filters-dropdown__footer--btn-apply'
          >
            Show results
          </button>
        </div>
      </div>
    </DropdownMenu>
  );
};

export default FiltersDropdown;
