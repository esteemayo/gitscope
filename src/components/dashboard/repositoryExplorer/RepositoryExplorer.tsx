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
} from 'lucide-react';

import RepoCard from './RepoCard';

import { RepositoryView } from '@/types/repository.type';
import { MOCK_REPOSITORIES } from '@/data/dashboard/repository.data';

import '../../../styles/components/dashboard/repositoryExplorer/RepositoryExplorer.scss';

const RepositoryExplorer = () => {
  const [view, setView] = useState<RepositoryView>('grid');

  return (
    <section className='repository-explorer'>
      <header className='repository-explorer__header'>
        <div className='repository-explorer__heading'>
          <span className='repository-explorer__heading--eyebrow'>
            Project collection
          </span>

          <h2 className='repository-explorer__heading--title'>Repositories</h2>

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
              placeholder='Search repositories...'
              aria-label='Search repositories'
            />

            <kbd>/</kbd>
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
            Showing <strong>6</strong> repositories
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
          {MOCK_REPOSITORIES.map((repository) => (
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
