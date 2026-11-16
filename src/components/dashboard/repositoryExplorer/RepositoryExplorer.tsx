'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';
import {
  Archive,
  ArrowDownUp,
  ArrowUpDown,
  Check,
  CircleDot,
  Search,
  SlidersHorizontal,
  X,
} from 'lucide-react';

import RepositoryFooter from './RepositoryFooter';
import RepoCard from './RepoCard';
import RepositoryEmptyState from './RepositoryEmptyState';
import RepositoryDropdown from './RepositoryDropdown';
import RepositoryViewToggle from './RepositoryViewToggle';

import { useEscapeKey } from '@/hooks/useEscapeKey';
import { useClickOutside } from '@/hooks/useClickOutside';

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

const isWithinStarRange = (star: number, starRange: StarRange) => {
  switch (starRange) {
    case '0-10':
      return star <= 10;

    case '10-50':
      return star >= 10 && star <= 50;

    case '50-100':
      return star >= 50 && star <= 100;

    case '100-500':
      return star >= 100 && star <= 500;

    case '500+':
      return star >= 500;

    default:
      return true;
  }
};

const INITIAL_ADVANCED_FILTER_STATE = {
  hasDescription: false,
  hasTopics: false,
  recentlyActive: false,
};

const RepositoryExplorer = ({ repositories }: RepositoryExplorerProps) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<RepositorySort>('updated');
  const [view, setView] = useState<RepositoryView>('grid');
  const [activeMenu, setActiveMenu] = useState<DropdownMenu | null>(null);
  const [starRange, setStarRange] = useState<StarRange>('all');
  const [repositoryType, setRepositoryType] = useState<RepositoryType>('all');
  const [currentTime, setCurrentTime] = useState<number | null>(null);

  const [advancedFilters, setAdvancedFilters] = useState<AdvancedFilters>(
    INITIAL_ADVANCED_FILTER_STATE,
  );

  const handleClose = () => {
    setActiveMenu(null);
  };

  useClickOutside(dropdownRef, !!activeMenu, handleClose);
  useEscapeKey({ isEnabled: !!activeMenu, onEscape: handleClose });

  const toggleMenu = (menu: DropdownMenu) => {
    setActiveMenu((current) => (current === menu ? null : menu));
  };

  const toggleAdvancedFilter = (key: keyof AdvancedFilters) => {
    setAdvancedFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleReset = () => {
    setSelectedLanguage('all');
    setRepositoryType('all');
    setStarRange('all');
  };

  const handleResetAdvancedFilter = () => {
    setAdvancedFilters(INITIAL_ADVANCED_FILTER_STATE);
  };

  const handleClearFilters = () => {
    handleReset();
    handleResetAdvancedFilter();
    handleClose();

    setSearchQuery('');
  };

  const activeAdvancedFilterCount =
    Object.values(advancedFilters).filter(Boolean).length;

  const activeFilterCount =
    activeAdvancedFilterCount +
    Number(repositoryType !== 'all') +
    Number(selectedLanguage !== 'all') +
    Number(starRange !== 'all');

  const languages = useMemo(() => {
    const uniqueLanguages = new Set(
      repositories
        .map((repository) => repository.language)
        .filter((language): language is string => Boolean(language)),
    );

    return Array.from(uniqueLanguages).sort((a, b) => a.localeCompare(b));
  }, [repositories]);

  const filteredRepositories = useMemo(() => {
    if (currentTime === null) return [];

    const thirtyDays = 30 * 24 * 60 * 60 * 1000;

    const filtered = repositories.filter((repository) => {
      const updatedTime = new Date(repository.updated_at).getTime();

      const matchesSearch =
        repository.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        repository.description
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        repository.topics.some((topic) =>
          topic.toLowerCase().includes(searchQuery.toLowerCase()),
        );

      const matchesLanguage =
        selectedLanguage === 'all' || repository.language === selectedLanguage;

      const matchesType = (() => {
        switch (repositoryType) {
          case 'original':
            return !repository.fork && !repository.archived;

          case 'forks':
            return repository.fork;

          case 'archived':
            return repository.archived;

          default:
            return true;
        }
      })();

      const matchesStars = isWithinStarRange(
        repository.stargazers_count,
        starRange,
      );

      const matchesDescription =
        !advancedFilters.hasDescription ||
        Boolean(repository.description.trim());

      const matchesTopic =
        !advancedFilters.hasTopics || repository.topics.length > 0;

      const matchesRecentActivity =
        !advancedFilters.recentlyActive ||
        currentTime -
          +(
            Number.isFinite(updatedTime) &&
            thirtyDays !== null &&
            updatedTime <= thirtyDays
          );

      return (
        matchesSearch &&
        matchesLanguage &&
        matchesType &&
        matchesStars &&
        matchesDescription &&
        matchesTopic &&
        matchesRecentActivity
      );
    });

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'stars':
          return b.stargazers_count - a.stargazers_count;

        case 'forks':
          return +b.fork - +a.fork;

        case 'name':
          return a.name.localeCompare(b.name);

        case 'updated':
        default:
          return (
            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
          );
      }
    });
  }, [
    advancedFilters,
    currentTime,
    repositories,
    repositoryType,
    searchQuery,
    selectedLanguage,
    sortBy,
    starRange,
  ]);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setCurrentTime(new Date().getTime());
    });

    return () => cancelAnimationFrame(raf);
  }, []);

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
        <div ref={dropdownRef} className='repository-explorer__toolbar'>
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
            <RepositoryDropdown
              label='Filters'
              isOpen={activeMenu === 'filters'}
              icon={SlidersHorizontal}
              filterCount={2}
              type='filter'
              onToggle={() => toggleMenu('filters')}
              ariaLabel='Advanced repository filters'
            >
              <div className='repository-explorer__dropdown-header'>
                <div>
                  <h4>Advanced filters</h4>

                  <p>Refine your repository results.</p>
                </div>

                <button
                  type='button'
                  onClick={handleClose}
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
                    onChange={() => toggleAdvancedFilter('hasDescription')}
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

                  <input
                    type='checkbox'
                    name='topics'
                    id='topics'
                    onChange={() => toggleAdvancedFilter('hasTopics')}
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

                  <input
                    type='checkbox'
                    name='recently'
                    id='recently'
                    onChange={() => toggleAdvancedFilter('recentlyActive')}
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
              </div>

              <div className='repository-explorer__dropdown-footer'>
                <button
                  type='button'
                  onClick={handleResetAdvancedFilter}
                  className='repository-explorer__reset-button'
                >
                  Reset
                </button>

                <button
                  type='button'
                  onClick={handleClose}
                  className='repository-explorer__apply-button'
                >
                  Show results
                </button>
              </div>
            </RepositoryDropdown>

            <RepositoryDropdown
              label={getSortLabel(sortBy)}
              isOpen={activeMenu === 'sort'}
              icon={ArrowDownUp}
              type='filter'
              onToggle={() => toggleMenu('sort')}
              ariaLabel='Sort repositories'
            >
              <div className='repository-explorer__panel-label'>Sort by</div>

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
            </RepositoryDropdown>

            <RepositoryViewToggle view={view} onChange={setView} />
          </div>
        </div>

        <div ref={dropdownRef} className='repository-explorer__filter-bar'>
          <RepositoryDropdown
            label={
              selectedLanguage === 'all' ? 'All languages' : selectedLanguage
            }
            isOpen={activeMenu === 'language'}
            onToggle={() => toggleMenu('language')}
            ariaLabel='Filter by language'
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
          </RepositoryDropdown>

          <RepositoryDropdown
            label={getTypeLabel(repositoryType)}
            isOpen={activeMenu === 'type'}
            onToggle={() => toggleMenu('type')}
            ariaLabel='Filter by repository type'
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
          </RepositoryDropdown>

          <RepositoryDropdown
            label={getStarRangeLabel(starRange)}
            isOpen={activeMenu === 'stars'}
            onToggle={() => toggleMenu('stars')}
            ariaLabel='Filter by star count'
          >
            <div className='repository-explorer__panel-label'>Star count</div>

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
          </RepositoryDropdown>

          {activeFilterCount > 0 && (
            <button
              type='button'
              onClick={handleClearFilters}
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
          )}
        </div>

        <div className='repository-explorer__results-bar'>
          <span>
            Showing <strong>{(filteredRepositories ?? []).length}</strong> of{' '}
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
          {(filteredRepositories ?? []).length > 0 ? (
            (filteredRepositories ?? []).map((repository) => (
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
              onReset={handleClearFilters}
            />
          )}
        </div>

        <RepositoryFooter repositories={filteredRepositories} />
      </div>
    </section>
  );
};

export default RepositoryExplorer;
