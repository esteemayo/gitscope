'use client';

import { Bookmark } from 'lucide-react';

import SavedProfilesSearch from './SavedProfilesSearch';
import SavedHeading from '../SavedHeading';
import SavedProfilesViewToggle from './SavedProfilesViewToggle';
import SavedProfilesSort from './SavedProfilesSort';

import { SavedToolbarProps } from '@/types/saved/toolbar/saved.toolbar.type';
import '../../../styles/components/saved/toolbar/SavedToolbar.scss';

const SavedToolbar = ({
  view,
  searchQuery,
  sortField,
  sortDirection,
  onViewChange,
  onSearchChange,
  onSortFieldChange,
  onSortDirectionChange,
}: SavedToolbarProps) => {
  return (
    <header className='saved-toolbar'>
      <SavedHeading
        title='Collection'
        description='All saved profiles.'
        icon={Bookmark}
      />

      <div className='saved-toolbar__controls'>
        <SavedProfilesSearch
          searchQuery={searchQuery}
          onSearchChange={onSearchChange}
        />

        <SavedProfilesSort
          sortField={sortField}
          sortDirection={sortDirection}
          onSortFieldChange={onSortFieldChange}
          onSortDirectionChange={onSortDirectionChange}
        />

        <SavedProfilesViewToggle view={view} onViewChange={onViewChange} />
      </div>
    </header>
  );
};

export default SavedToolbar;
