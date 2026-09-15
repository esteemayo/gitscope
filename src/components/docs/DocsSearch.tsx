'use client';

import { useState } from 'react';
import { Command, Search } from 'lucide-react';

import DocsSearchDialog from './DocsSearchDialog';
import '../../styles/components/docs/DocsSearch.scss';

const DocsSearch = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type='button'
        onClick={() => setIsOpen(true)}
        className='docs-search'
        aria-label='Search documentation'
        aria-haspopup='dialog'
        aria-expanded={isOpen}
      >
        <Search
          size={16}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />

        <span className='docs-search__placeholder'>Search documentation</span>

        <kbd>
          <Command
            size={10}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />
          K
        </kbd>
      </button>

      <DocsSearchDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default DocsSearch;
