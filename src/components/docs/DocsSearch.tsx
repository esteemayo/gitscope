'use client';

import { Search } from 'lucide-react';

import '../../styles/components/docs/DocsSearch.scss';

const DocsSearch = () => {
  return (
    <button
      type='button'
      className='docs-search'
      aria-label='Search documentation'
    >
      <Search
        size={16}
        strokeWidth={1.8}
        role='img'
        aria-hidden='true'
        focusable='false'
      />

      <span className='docs-search__placeholder'>Search documentation</span>

      <kbd>K</kbd>
    </button>
  );
};

export default DocsSearch;
