'use client';

import { Grid2X2, List, Search, SlidersHorizontal } from 'lucide-react';
import { SavedToolbarProps } from '@/types/saved/saved.toolbar.type';

import '../../styles/components/saved/SavedToolbar.scss';

const SavedToolbar = ({ view, onView }: SavedToolbarProps) => {
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
            placeholder='Search profiles...'
          />
        </label>

        <button type='button' className='saved-toolbar__sort'>
          <SlidersHorizontal
            size={15}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />

          <span>Recent</span>
        </button>

        <div className='saved-toolbar__view-toggle'>
          <button
            type='button'
            onClick={() => onView('grid')}
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
