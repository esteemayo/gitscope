'use client';

import { Grid2X2, List } from 'lucide-react';
import { SavedProfilesViewToggleProps } from '@/types/saved/toolbar/saved.profiles.view.toggle.type';

import '../../../styles/components/saved/toolbar/SavedProfilesViewToggle.scss';

const SavedProfilesViewToggle = ({
  view,
  onViewChange,
}: SavedProfilesViewToggleProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      e.preventDefault();

      onViewChange((prev) => (prev === 'grid' ? 'list' : 'grid'));
    }
  };

  return (
    <div className='saved-profiles-view-toggle' aria-label='View mode'>
      <button
        type='button'
        onClick={() => onViewChange('grid')}
        onKeyDown={(e) => handleKeyDown(e)}
        className='saved-profiles-view-toggle__btn'
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
        onClick={() => onViewChange('list')}
        onKeyDown={handleKeyDown}
        className='saved-profiles-view-toggle__btn'
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
  );
};

export default SavedProfilesViewToggle;
