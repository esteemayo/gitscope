'use client';

import { Search } from 'lucide-react';
import { SavedProfilesSearchProps } from '@/types/saved/toolbar/saved.profiles.search.type';

import '../../../styles/components/saved/toolbar/SavedProfilesSearch.scss';

const SavedProfilesSearch = ({
  searchQuery,
  onSearchChange,
}: SavedProfilesSearchProps) => {
  return (
    <label htmlFor='search' className='search-profiles-search'>
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
        value={searchQuery}
        placeholder='Search saved profiles...'
        onChange={(e) => onSearchChange(e.target.value)}
        className='search-profiles-search__input'
      />
    </label>
  );
};

export default SavedProfilesSearch;
