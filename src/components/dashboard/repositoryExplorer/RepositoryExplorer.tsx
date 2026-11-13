'use client';

import { useState } from 'react';
import clsx from 'clsx';
import {
  ArrowDownUp,
  ChevronDown,
  LayoutGrid,
  List,
  Search,
  SlidersHorizontal,
  X,
} from 'lucide-react';

import RepoCard from './RepoCard';

import {
  RepositoryView,
  SortOptionsType,
  StarOptionsType,
  TypeOptionsType,
} from '@/types/dashboard/repository';
import { RepositoryExplorerProps } from '@/types/dashboard/repository/repository.explorer.type';

import '../../../styles/components/dashboard/repositoryExplorer/RepositoryExplorer.scss';

const SORT_OPTIONS: SortOptionsType[] = [
  {
    value: 'updated',
    label: 'Recently updated',
    description: 'Newest activity first',
  },
  {
    value: 'stars',
    label: 'Most stars',
    description: 'Highest star count first',
  },
  {
    value: 'forks',
    label: 'Most forks',
    description: 'Highest fork count first',
  },
  {
    value: 'name',
    label: 'Name',
    description: 'Alphabetical order',
  },
];

const TYPE_OPTIONS: TypeOptionsType[] = [
  {
    value: 'all',
    label: 'All repositories',
    description: 'Every public repository',
  },
  {
    value: 'original',
    label: 'Original repositories',
    description: 'Repositories created by this developer',
  },
  {
    value: 'forks',
    label: 'Forks',
    description: 'Repositories forked from other projects',
  },
  {
    value: 'archived',
    label: 'Archived',
    description: 'Repositories marked as archived',
  },
];

const STAR_OPTIONS: StarOptionsType[] = [
  {
    value: 'all',
    label: 'Any star count',
    description: 'No minimum or maximum',
  },
  {
    value: '0-10',
    label: '0-10 stars',
    description: 'Less than 11 stars',
  },
  {
    value: '10-50',
    label: '10-50 stars',
    description: 'Between 10 and 50 stars',
  },
  {
    value: '50-100',
    label: '50-100 stars',
    description: 'Between 50 and 100 stars',
  },
  {
    value: '100-500',
    label: '100-500 stars',
    description: 'Between 100 and 500 stars',
  },
  {
    value: '500+',
    label: '500+ stars',
    description: 'More than 500 stars',
  },
];

const RepositoryExplorer = ({ repositories }: RepositoryExplorerProps) => {
  const [view, setView] = useState<RepositoryView>('grid');
  const [activeMenu, setActiveMenu] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section
      className='repository-explorer'
      aria-labelledby='repository-explorer-title'
    >
      <header className='repository-explorer__header'>
        <div className='repository-explorer__heading'>
          <span className='repository-explorer__heading--eyebrow'>
            Project collection
          </span>

          <h2
            id='repository-explorer-title'
            className='repository-explorer__heading--title'
          >
            Repositories
          </h2>

          <p className='repository-explorer__heading--description'>
            Explore projects, technologies, and open-source work across this
            developer&apos;s profile.
          </p>
        </div>

        <button type='button' className='repository-explorer__btn-export'>
          Export CSV
        </button>
      </header>

      <div className='repository-explorer__panel'>
        <div className='repository-explorer__toolbar'>
          <label htmlFor='search' className='repository-explorer__search-box'>
            <Search
              size={17}
              strokeWidth={1.8}
              role='img'
              aria-hidden='true'
              focusable='false'
            />

            <input
              type='search'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder='Search repositories...'
              aria-label='Search repositories'
            />

            {searchQuery ? (
              <button
                type='button'
                onClick={() => setSearchQuery('')}
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

          <div className='repository-explorer__actions'>
            <button
              type='button'
              className='repository-explorer__actions--btn-filter'
            >
              <SlidersHorizontal
                size={16}
                strokeWidth={1.8}
                role='img'
                aria-hidden='true'
                focusable='false'
              />
              Filters
              <span className='repository-explorer__actions--filter-count'>
                2
              </span>
            </button>

            <button
              type='button'
              className='repository-explorer__actions--btn-sort'
            >
              <ArrowDownUp
                size={16}
                strokeWidth={1.8}
                role='img'
                aria-hidden='true'
                focusable='false'
              />
              Recently updated
              <ChevronDown
                size={16}
                strokeWidth={1.8}
                role='img'
                aria-hidden='true'
                focusable='false'
              />
            </button>

            <div className='repository-explorer__view-toggle'>
              <button
                type='button'
                onClick={() => setView('grid')}
                className={clsx('repository-explorer__view-toggle--btn', {
                  'active-view': view === 'grid',
                })}
                title='Grid view'
                aria-label='Grid view'
                aria-pressed={view === 'grid'}
              >
                <LayoutGrid
                  size={18}
                  strokeWidth={1.8}
                  role='img'
                  aria-hidden='true'
                  focusable='false'
                />
              </button>

              <button
                type='button'
                onClick={() => setView('list')}
                className={clsx('repository-explorer__view-toggle--btn', {
                  'active-view': view === 'list',
                })}
                title='List view'
                aria-label='List view'
                aria-pressed={view === 'list'}
              >
                <List
                  size={18}
                  strokeWidth={1.8}
                  role='img'
                  aria-hidden='true'
                  focusable='false'
                />
              </button>
            </div>
          </div>
        </div>

        <div className='repository-explorer__filter-bar'>
          <button
            type='button'
            className='repository-explorer__btn-filter-chip'
          >
            All languages
            <ChevronDown
              size={14}
              strokeWidth={1.8}
              role='img'
              aria-hidden='true'
              focusable='false'
            />
          </button>

          <button
            type='button'
            className='repository-explorer__btn-filter-chip'
          >
            All repositories
            <ChevronDown
              size={14}
              strokeWidth={1.8}
              role='img'
              aria-hidden='true'
              focusable='false'
            />
          </button>

          <button
            type='button'
            className='repository-explorer__btn-filter-chip'
          >
            Any star count
            <ChevronDown
              size={14}
              strokeWidth={1.8}
              role='img'
              aria-hidden='true'
              focusable='false'
            />
          </button>

          <button
            type='button'
            className='repository-explorer__btn-clear-filter'
          >
            Clear filters
          </button>
        </div>

        <div className='repository-explorer__results-bar'>
          <span>
            Showing <strong>{(repositories ?? []).length}</strong> repositories
          </span>

          <span className='repository-explorer__results-hint'>
            Sorted by last update
          </span>
        </div>

        <div
          className={clsx('repository-explorer__repository-collection', {
            'grid-view': view === 'grid',
            'list-view': view === 'list',
          })}
        >
          {repositories.map((repository) => (
            <RepoCard key={repository.id} repository={repository} view={view} />
          ))}
        </div>

        <footer className='repository-explorer__footer'>
          <span className='repository-explorer__footer--text'>
            End of repository preview
          </span>

          <span className='repository-explorer__footer--indicator'>
            Public data
          </span>
        </footer>
      </div>
    </section>
  );
};

export default RepositoryExplorer;
