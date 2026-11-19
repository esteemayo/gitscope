'use client';

import clsx from 'clsx';
import { Search, X } from 'lucide-react';

import '../../../styles/components/dashboard/repositoryExplorer/RepositorySearch.scss';

interface RepositorySearchProps {
  value: string;
  placeholder?: string;
  onChange(value: string): void;
  className?: string;
  style?: React.CSSProperties;
}

const RepositorySearch = ({
  value,
  placeholder = 'Search repositories...',
  onChange,
  className,
  style,
}: RepositorySearchProps) => {
  return (
    <div className={clsx('repository-search', className)} style={style}>
      <label htmlFor='search' className='repository-search__container'>
        <Search
          size={17}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />

        <input
          id='search'
          name='search'
          type='search'
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          aria-label='Search repositories'
        />

        {value ? (
          <button
            type='button'
            onClick={() => onChange('')}
            aria-label='Clear search'
          >
            <X
              size={14}
              strokeWidth={1.8}
              role='img'
              aria-hidden='true'
              focusable='false'
            />
          </button>
        ) : (
          <kbd>/</kbd>
        )}
      </label>
    </div>
  );
};

export default RepositorySearch;
