'use client';

import { useRef, useState } from 'react';
import { Check, ChevronDown, SlidersHorizontal } from 'lucide-react';

import { useEscapeKey } from '@/hooks/useEscapeKey';
import { useClickOutside } from '@/hooks/useClickOutside';

import * as data from '@/data/saved/sort-options.data';
import { SavedProfilesSortProps } from '@/types/saved/toolbar/saved.profiles.sort.type';

import '../../../styles/components/saved/toolbar/SavedProfilesSort.scss';

const SavedProfilesSort = ({
  sortField,
  sortDirection,
  onSortFieldChange,
  onSortDirectionChange,
}: SavedProfilesSortProps) => {
  const menuRef = useRef<HTMLDivElement | null>(null);

  const [isOpen, setIsOpen] = useState(false);

  const selectedSort = data.savedSortOptions.find(
    (option) => option.value === sortField,
  );

  const directionLabels =
    sortField === 'recent'
      ? {
          desc: 'Newest first',
          asc: 'Oldest first',
        }
      : {
          desc: 'Highest first',
          asc: 'Lowest first',
        };

  const handleClose = () => {
    setIsOpen(false);
  };

  useClickOutside(menuRef, isOpen, handleClose);
  useEscapeKey({ isEnabled: isOpen, onEscape: handleClose });

  return (
    <div className='saved-profiles-sort'>
      <button
        type='button'
        onClick={() => setIsOpen((value) => !value)}
        className='saved-profiles-sort__btn'
        aria-haspopup='menu'
        aria-expanded={isOpen}
      >
        <SlidersHorizontal
          size={15}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />

        <span className='saved-profiles-sort__btn--label'>
          {selectedSort?.label ?? 'Recently viewed'}
        </span>

        <ChevronDown
          size={14}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </button>

      <div
        ref={menuRef}
        className='saved-profiles-sort__menu'
        role='menu'
        aria-label='Sort saved profiles'
        data-open={isOpen}
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <div className='saved-profiles-sort__menu--header'>
          <span>Sort by</span>
        </div>

        {data.savedSortOptions.map((option) => {
          const { label, value, icon: Icon } = option;
          const isSelected = value === sortField;

          return (
            <button
              key={value}
              type='button'
              onClick={() => onSortFieldChange(value)}
              className='saved-profiles-sort__menu--item'
              role='menuitemradio'
              aria-checked={isSelected}
            >
              <Icon
                size={15}
                strokeWidth={1.8}
                role='img'
                aria-hidden='true'
                focusable='false'
              />

              <span>{label}</span>

              {isSelected && (
                <Check
                  size={15}
                  strokeWidth={1.8}
                  role='img'
                  aria-hidden='true'
                  focusable='false'
                />
              )}
            </button>
          );
        })}

        <div
          className='saved-profiles-sort__menu--divider'
          aria-hidden='true'
        />

        <div className='saved-profiles-sort__menu--header'>
          <span>Order</span>
        </div>

        {data.savedSortDirections.map((direction) => {
          const { value, icon: Icon } = direction;
          const isSelected = value === sortDirection;

          return (
            <button
              key={value}
              type='button'
              onClick={() => onSortDirectionChange(value)}
              className='saved-profiles-sort__menu--item'
              role='menuitemradio'
              aria-checked={isSelected}
            >
              <Icon
                size={15}
                strokeWidth={1.8}
                role='img'
                aria-hidden='true'
                focusable='false'
              />

              <span>{directionLabels[value]}</span>

              {isSelected && (
                <Check
                  size={15}
                  strokeWidth={1.8}
                  role='img'
                  aria-hidden='true'
                  focusable='false'
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SavedProfilesSort;
