'use client';

import { useState } from 'react';
import {
  ArrowDownAZ,
  ArrowDownUp,
  Check,
  ChevronDown,
  Grid2X2,
  List,
  Search,
  SlidersHorizontal,
} from 'lucide-react';

import { SavedToolbarProps } from '@/types/saved/saved.toolbar.type';
import '../../styles/components/saved/SavedToolbar.scss';

const SavedToolbar = ({ view, onView }: SavedToolbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleKeyDown = () => {
    onView((prev) => (prev === 'grid' ? 'list' : 'grid'));
  };

  return (
    <header className='saved-toolbar'>
      <div className='saved-toolbar__heading'>
        <div className='saved-toolbar__heading--eyebrow'>Collection</div>

        <h2 className='saved-toolbar__heading--title'>All saved profiles</h2>
      </div>

      <div className='saved-toolbar__actions'>
        <label htmlFor='search' className='saved-toolbar__search'>
          <Search
            size={15}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />

          <span className='sr-only'>Search saved profiles</span>

          <input
            type='search'
            name='search'
            id='search'
            placeholder='Search saved profiles...'
          />
        </label>

        <div className='saved-toolbar__sort'>
          <button
            type='button'
            onClick={() => setIsOpen((value) => !value)}
            className='saved-toolbar__sort--btn'
            aria-expanded={isOpen}
            aria-controls='saved-toolbar-menu'
          >
            <SlidersHorizontal
              size={15}
              strokeWidth={1.8}
              role='img'
              aria-hidden='true'
              focusable='false'
            />

            <span className='saved-toolbar__sort--label'>Recently viewed</span>

            <ChevronDown
              size={14}
              strokeWidth={1.8}
              role='img'
              aria-hidden='true'
              focusable='false'
            />
          </button>

          {isOpen && (
            <div
              id='saved-toolbar-menu'
              className='saved-toolbar__sort-menu'
              role='menu'
              aria-hidden={!isOpen}
            >
              <div className='saved-toolbar__menu-header'>
                <span>Sort by</span>
              </div>

              <button
                type='button'
                className='saved-toolbar__menu-item'
                role='menuitem'
                aria-current='true'
              >
                <ArrowDownUp
                  size={15}
                  strokeWidth={1.8}
                  role='img'
                  aria-hidden='true'
                  focusable='false'
                />

                <span>Recently viewed</span>

                <Check
                  size={15}
                  strokeWidth={1.8}
                  role='img'
                  aria-hidden='true'
                  focusable='false'
                />
              </button>

              <button
                type='button'
                className='saved-toolbar__menu-item'
                role='menuitem'
              >
                <ArrowDownAZ
                  size={15}
                  strokeWidth={1.8}
                  role='img'
                  aria-hidden='true'
                  focusable='false'
                />

                <span>Stars</span>
              </button>

              <button
                type='button'
                className='saved-toolbar__menu-item'
                role='menuitem'
              >
                <ArrowDownAZ
                  size={15}
                  strokeWidth={1.8}
                  role='img'
                  aria-hidden='true'
                  focusable='false'
                />

                <span>Repositories</span>
              </button>

              <button
                type='button'
                className='saved-toolbar__menu-item'
                role='menuitem'
              >
                <ArrowDownAZ
                  size={15}
                  strokeWidth={1.8}
                  role='img'
                  aria-hidden='true'
                  focusable='false'
                />

                <span>Followers</span>
              </button>

              <div className='saved-toolbar__menu-divider' aria-hidden='true' />

              <div className='saved-toolbar__direction-header'>
                <span>Order</span>
              </div>

              <button
                type='button'
                className='saved-toolbar__menu-item'
                role='menuitem'
              >
                <ArrowDownAZ
                  size={15}
                  strokeWidth={1.8}
                  role='img'
                  aria-hidden='true'
                  focusable='false'
                />

                <span>Highest first</span>
              </button>

              <button
                type='button'
                className='saved-toolbar__menu-item'
                role='menuitem'
              >
                <ArrowDownAZ
                  size={15}
                  strokeWidth={1.8}
                  role='img'
                  aria-hidden='true'
                  focusable='false'
                />

                <span>Lowest first</span>
              </button>
            </div>
          )}
        </div>

        <div className='saved-toolbar__view-toggle' aria-label='View mode'>
          <button
            type='button'
            onClick={() => onView('grid')}
            onKeyDown={handleKeyDown}
            aria-label='Grid view'
            aria-pressed={view === 'grid'}
          >
            <Grid2X2
              size={15}
              strokeWidth={1.8}
              role='img'
              aria-hidden='true'
              focusable='false'
            />
          </button>

          <button
            type='button'
            onClick={() => onView('list')}
            onKeyDown={handleKeyDown}
            aria-label='List view'
            aria-pressed={view === 'list'}
          >
            <List
              size={15}
              strokeWidth={1.8}
              role='img'
              aria-hidden='true'
              focusable='false'
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default SavedToolbar;
