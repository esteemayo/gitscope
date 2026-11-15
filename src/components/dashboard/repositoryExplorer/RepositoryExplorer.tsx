'use client';

import { useMemo, useRef, useState } from 'react';
import clsx from 'clsx';
import {
  Archive,
  ArrowDownUp,
  ArrowUpDown,
  Check,
  ChevronDown,
  CircleDot,
  LayoutGrid,
  List,
  Search,
  SlidersHorizontal,
  X,
} from 'lucide-react';

import RepoCard from './RepoCard';
import RepositoryEmptyState from './RepositoryEmptyState';

import {
  AdvancedFilters,
  DropdownMenu,
  RepositorySort,
  RepositoryType,
  RepositoryView,
  SortOptionsType,
  StarOptionsType,
  StarRange,
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

const getSortLabel = (value: RepositorySort) =>
  SORT_OPTIONS.find((option) => option.value === value)?.label ??
  'Recently updated';

const getTypeLabel = (value: RepositoryType) =>
  TYPE_OPTIONS.find((option) => option.value === value)?.label ??
  'All repositories';

const getStarRangeLabel = (value: StarRange) =>
  STAR_OPTIONS.find((option) => option.value === value)?.label ??
  'Any star count';

const RepositoryExplorer = ({ repositories }: RepositoryExplorerProps) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const [view, setView] = useState<RepositoryView>('grid');
  const [activeMenu, setActiveMenu] = useState<DropdownMenu | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<RepositorySort>('updated');
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [repositoryType, setRepositoryType] = useState<RepositoryType>('all');
  const [starRange, setStarRange] = useState<StarRange>('all');

  const [advancedFilters, setAdvancedFilters] = useState<AdvancedFilters>({
    hasDescription: false,
    hastopics: false,
    recentlyActive: false,
  });

  const toggleMenu = (menu: DropdownMenu) => {
    setActiveMenu((current) => (current === menu ? null : menu));
  };

  const languages = useMemo(() => {
    const uniqueLanguages = new Set(
      repositories
        .map((repository) => repository.language)
        .filter((language): language is string => Boolean(language)),
    );

    return Array.from(uniqueLanguages).sort((a, b) => a.localeCompare(b));
  }, [repositories]);

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

      <div ref={dropdownRef} className='repository-explorer__panel'>
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
            <div className='repository-explorer__dropdown'>
              <button
                type='button'
                onClick={() => toggleMenu('filters')}
                className={clsx('repository-explorer__dropdown--btn-filter', {
                  'dropdown-btn-active': activeMenu === 'filters',
                })}
                aria-expanded={activeMenu === 'filters'}
                aria-haspopup='dialog'
              >
                <SlidersHorizontal
                  size={16}
                  strokeWidth={1.8}
                  role='img'
                  aria-hidden='true'
                  focusable='false'
                />

                <span>Filters</span>

                <span className='repository-explorer__dropdown--filter-count'>
                  2
                </span>

                <ChevronDown
                  size={14}
                  strokeWidth={1.8}
                  className={activeMenu === 'filters' ? 'chevron-open' : ''}
                  role='img'
                  aria-hidden='true'
                  focusable='false'
                />
              </button>

              {activeMenu === 'filters' && (
                <div
                  className='repository-explorer__dropdown-panel'
                  role='dialog'
                  aria-label='Advanced repository filters'
                >
                  <div className='repository-explorer__dropdown-header'>
                    <div>
                      <h4>Advanced filters</h4>

                      <p>Refine your repository results.</p>
                    </div>

                    <button
                      type='button'
                      onClick={() => setActiveMenu(null)}
                      className='repository-explorer__panel-close'
                      aria-label='Close filters'
                    >
                      <X
                        size={15}
                        strokeWidth={1.8}
                        role='img'
                        aria-hidden='true'
                        focusable='false'
                      />
                    </button>
                  </div>

                  <div className='repository-explorer__filter-options'>
                    <label
                      htmlFor='description'
                      className='repository-explorer__checkbox-option'
                    >
                      <div className='repository-explorer__checkbox-content'>
                        <span className='repository-explorer__option-icon'>
                          <Archive
                            size={15}
                            strokeWidth={1.8}
                            role='img'
                            aria-hidden='true'
                            focusable='false'
                          />
                        </span>

                        <div>
                          <strong>Has description</strong>

                          <small>Only show documented repositories</small>
                        </div>
                      </div>

                      <input
                        type='checkbox'
                        name='description'
                        id='description'
                      />

                      <span className='repository-explorer__custom-checkbox'>
                        <Check
                          size={12}
                          strokeWidth={1.8}
                          role='img'
                          aria-hidden='true'
                          focusable='false'
                        />
                      </span>
                    </label>

                    <label
                      htmlFor='topics'
                      className='repository-explorer__checkbox-option'
                    >
                      <div className='repository-explorer__checkbox-content'>
                        <span className='repository-explorer__option-icon'>
                          <CircleDot
                            size={15}
                            strokeWidth={1.8}
                            role='img'
                            aria-hidden='true'
                            focusable='false'
                          />
                        </span>

                        <div>
                          <strong>Has topics</strong>

                          <small>Only show repositories with topics</small>
                        </div>
                      </div>

                      <input type='checkbox' name='topics' id='topics' />

                      <span className='repository-explorer__custom-checkbox'>
                        <Check
                          size={12}
                          strokeWidth={1.8}
                          role='img'
                          aria-hidden='true'
                          focusable='false'
                        />
                      </span>
                    </label>

                    <label
                      htmlFor='recently'
                      className='repository-explorer__checkbox-option'
                    >
                      <div className='repository-explorer__checkbox-content'>
                        <span className='repository-explorer__option-icon'>
                          <ArrowUpDown
                            size={15}
                            strokeWidth={1.8}
                            role='img'
                            aria-hidden='true'
                            focusable='false'
                          />
                        </span>

                        <div>
                          <strong>Recently active</strong>

                          <small>Updated within the last 30 days</small>
                        </div>
                      </div>

                      <input type='checkbox' name='recently' id='recently' />

                      <span className='repository-explorer__custom-checkbox'>
                        <Check
                          size={12}
                          strokeWidth={1.8}
                          role='img'
                          aria-hidden='true'
                          focusable='false'
                        />
                      </span>
                    </label>
                  </div>

                  <div className='repository-explorer__dropdown-footer'>
                    <button
                      type='button'
                      onClick={() =>
                        setAdvancedFilters({
                          hasDescription: false,
                          hastopics: false,
                          recentlyActive: false,
                        })
                      }
                      className='repository-explorer__reset-button'
                    >
                      Reset
                    </button>

                    <button
                      type='button'
                      onClick={() => setActiveMenu(null)}
                      className='repository-explorer__apply-button'
                    >
                      Show results
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className='repository-explorer__dropdown'>
              <button
                type='button'
                onClick={() => toggleMenu('sort')}
                className={clsx('repository-explorer__dropdown--btn-sort', {
                  'dropdown-btn-active': activeMenu === 'sort',
                })}
                aria-expanded={activeMenu === 'sort'}
                aria-haspopup='listbox'
              >
                <ArrowDownUp
                  size={16}
                  strokeWidth={1.8}
                  role='img'
                  aria-hidden='true'
                  focusable='false'
                />

                <span>{getSortLabel(sortBy)}</span>

                <ChevronDown
                  size={14}
                  strokeWidth={1.8}
                  className={activeMenu === 'sort' ? 'chevron-open' : ''}
                  role='img'
                  aria-hidden='true'
                  focusable='false'
                />
              </button>

              {activeMenu === 'sort' && (
                <div
                  className='repository-explorer__dropdown-panel'
                  role='listbox'
                  aria-label='Sort repositories'
                >
                  <div className='repository-explorer__panel-label'>
                    Sort by
                  </div>

                  {SORT_OPTIONS.map((option) => {
                    const { value, label, description } = option;

                    return (
                      <button
                        key={value}
                        type='button'
                        onClick={() => {
                          setSortBy(value);
                          setActiveMenu(null);
                        }}
                        className={clsx('repository-explorer__menu-option', {
                          'menu-option-active': sortBy === value,
                        })}
                        role='option'
                        aria-selected={sortBy === value}
                      >
                        <span className='repository-explorer__menu-option-text'>
                          <strong>{label}</strong>

                          <small>{description}</small>
                        </span>

                        {sortBy === value && (
                          <Check
                            size={16}
                            strokeWidth={1.8}
                            className='selected-check'
                            role='img'
                            aria-hidden='true'
                            focusable='false'
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

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
          <div className='repository-explorer__dropdown'>
            <button
              type='button'
              onClick={() => toggleMenu('language')}
              className='repository-explorer__btn-filter-chip'
              aria-expanded={activeMenu === 'language'}
              aria-haspopup='listbox'
            >
              <span>
                {selectedLanguage === 'all'
                  ? 'All languages'
                  : selectedLanguage}
              </span>

              <ChevronDown
                size={14}
                strokeWidth={1.8}
                className={activeMenu === 'language' ? 'chevron-open' : ''}
                role='img'
                aria-hidden='true'
                focusable='false'
              />
            </button>

            {activeMenu === 'language' && (
              <div
                className='repository-explorer__dropdown-panel'
                role='listbox'
                aria-label='Filter by language'
              >
                <div className='repository-explorer__panel-label'>
                  Programming language
                </div>

                <button
                  type='button'
                  onClick={() => {
                    setSelectedLanguage('all');
                    setActiveMenu(null);
                  }}
                  className={clsx('repository-explorer__menu-option', {
                    'menu-option-active': selectedLanguage === 'all',
                  })}
                  role='option'
                  aria-selected={selectedLanguage === 'all'}
                >
                  <span className='repository-explorer__menu-option-text'>
                    <strong>All languages</strong>

                    <small>Show every programming language</small>
                  </span>

                  {selectedLanguage === 'all' && (
                    <Check
                      size={16}
                      strokeWidth={1.8}
                      className='selected-check'
                      role='img'
                      aria-hidden='true'
                      focusable='true'
                    />
                  )}
                </button>

                <div
                  className='repository-explorer__menu-divider'
                  aria-hidden='true'
                />

                {languages.map((language) => (
                  <button
                    key={language}
                    type='button'
                    onClick={() => {
                      setSelectedLanguage(language);
                      setActiveMenu(null);
                    }}
                    className={clsx('repository-explorer__menu-option', {
                      'menu-option-active': selectedLanguage === language,
                    })}
                    role='option'
                    aria-selected={selectedLanguage === language}
                  >
                    <span className='repository-explorer__menu-option-text'>
                      <strong>{language}</strong>
                    </span>

                    {selectedLanguage === language && (
                      <Check
                        size={16}
                        strokeWidth={1.8}
                        className='selected-check'
                        role='img'
                        aria-hidden='true'
                        focusable='true'
                      />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className='repository-explorer__dropdown'>
            <button
              type='button'
              onClick={() => toggleMenu('type')}
              className='repository-explorer__btn-filter-chip'
              aria-expanded={activeMenu === 'type'}
              aria-haspopup='listbox'
            >
              <span>{getTypeLabel(repositoryType)}</span>

              <ChevronDown
                size={14}
                strokeWidth={1.8}
                className={activeMenu === 'type' ? 'chevron-open' : ''}
                role='img'
                aria-hidden='true'
                focusable='false'
              />
            </button>

            {activeMenu === 'type' && (
              <div
                className='repository-explorer__dropdown-panel'
                role='listbox'
                aria-label='Filter by repository type'
              >
                <div className='repository-explorer__panel-label'>
                  Repository type
                </div>

                {TYPE_OPTIONS.map((option) => {
                  const { value, label, description } = option;

                  return (
                    <button
                      key={value}
                      type='button'
                      onClick={() => {
                        setRepositoryType(value);
                        setActiveMenu(null);
                      }}
                      className={clsx('repository-explorer__menu-option', {
                        'menu-option-active': repositoryType === value,
                      })}
                      role='option'
                      aria-selected={repositoryType === value}
                    >
                      <span className='repository-explorer__menu-option-text'>
                        <strong>{label}</strong>

                        <small>{description}</small>
                      </span>

                      {repositoryType === value && (
                        <Check
                          size={16}
                          strokeWidth={1.8}
                          className='selected-check'
                          role='img'
                          aria-hidden='true'
                          focusable='true'
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <div className='repository-explorer__dropdown'>
            <button
              type='button'
              onClick={() => toggleMenu('stars')}
              className='repository-explorer__btn-filter-chip'
              aria-expanded={activeMenu === 'stars'}
              aria-haspopup='listbox'
            >
              <span>{getStarRangeLabel(starRange)}</span>

              <ChevronDown
                size={14}
                strokeWidth={1.8}
                className={activeMenu === 'stars' ? 'chevron-open' : ''}
                role='img'
                aria-hidden='true'
                focusable='false'
              />
            </button>

            {activeMenu === 'stars' && (
              <div
                className='repository-explorer__dropdown-panel'
                role='listbox'
                aria-label='Filter by star count'
              >
                <div className='repository-explorer__panel-label'>
                  Star count
                </div>

                {STAR_OPTIONS.map((option) => {
                  const { value, label, description } = option;

                  return (
                    <button
                      key={value}
                      type='button'
                      onClick={() => {
                        setStarRange(value);
                        setActiveMenu(null);
                      }}
                      className={clsx('repository-explorer__menu-option', {
                        'menu-option-active': starRange === value,
                      })}
                      role='option'
                      aria-selected={starRange === value}
                    >
                      <span className='repository-explorer__menu-option-text'>
                        <strong>{label}</strong>

                        <small>{description}</small>
                      </span>

                      {starRange === value && (
                        <Check
                          size={16}
                          strokeWidth={1.8}
                          className='selected-check'
                          role='img'
                          aria-hidden='true'
                          focusable='true'
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <button
            type='button'
            className='repository-explorer__btn-clear-filter'
          >
            <X
              size={13}
              strokeWidth={1.8}
              role='img'
              aria-hidden='true'
              focusable='true'
            />

            <span>Clear filters</span>
          </button>
        </div>

        <div className='repository-explorer__results-bar'>
          <span>
            Showing <strong>{(repositories ?? []).length}</strong> of{' '}
            <strong>{(repositories ?? []).length}</strong> repositories
          </span>

          <span className='repository-explorer__results-hint'>
            Sorted by {getSortLabel(sortBy).toLowerCase()}
          </span>
        </div>

        <div
          className={clsx('repository-explorer__repository-collection', {
            'grid-view': view === 'grid',
            'list-view': view === 'list',
          })}
        >
          {repositories.length > 0 ? (
            repositories.map((repository) => (
              <RepoCard
                key={repository.id}
                repository={repository}
                view={view}
              />
            ))
          ) : (
            <RepositoryEmptyState
              title='No repositories found'
              description='Try changing your search or removing some filters.'
              btnLabel='Clear all filters'
              onReset={() => console.log('reset btn clicked!')}
            />
          )}
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
