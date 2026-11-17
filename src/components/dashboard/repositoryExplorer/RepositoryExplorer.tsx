'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';
import { ArrowDownUp, Search, SlidersHorizontal, X } from 'lucide-react';

import LanguageDropdown from './LanguageDropdown';
import RepoCard from './RepoCard';
import RepositoryFooter from './RepositoryFooter';
import SortDropdown from './SortDropdown';
import RepositoryDropdown from './RepositoryDropdown';
import StarsDropdown from './StarsDropdown';
import RepositoryEmptyState from './RepositoryEmptyState';
import FiltersDropdown from './FiltersDropdown';
import RepositoryViewToggle from './RepositoryViewToggle';

import { useEscapeKey } from '@/hooks/useEscapeKey';
import { useClickOutside } from '@/hooks/useClickOutside';

import {
  AdvancedFilters,
  DropdownMenu,
  RepositorySort,
  RepositoryType,
  RepositoryView,
  StarRange,
} from '@/types/dashboard/repository';
import { RepositoryExplorerProps } from '@/types/dashboard/repository/repository.explorer.type';

import {
  SORT_OPTIONS,
  STAR_OPTIONS,
  TYPE_OPTIONS,
} from '@/data/dashboard/repository-options.data';
import '../../../styles/components/dashboard/repositoryExplorer/RepositoryExplorer.scss';

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

  const handleSortChange = (value: RepositorySort) => {
    setSortBy(value);
    setActiveMenu(null);
  };

  const handleLanguageChange = (value: string) => {
    setSelectedLanguage(value);
    setActiveMenu(null);
  };

  const handleStarChange = (value: StarRange) => {
    setStarRange(value);
    setActiveMenu(null);
  };

  const handleRepositoryTypeChange = (value: RepositoryType) => {
    setRepositoryType(value);
    setActiveMenu(null);
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

  const availableLanguages = useMemo(() => {
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
            <FiltersDropdown
              label='Filters'
              isOpen={activeMenu === 'filters'}
              icon={SlidersHorizontal}
              filterCount={2}
              type='filter'
              onToggle={() => toggleMenu('filters')}
              onClose={handleClose}
              onToggleAdvancedFilter={toggleAdvancedFilter}
              onResetAdvancedFilter={handleResetAdvancedFilter}
              ariaLabel='Advanced repository filters'
            />

            <SortDropdown
              label={getSortLabel(sortBy)}
              isOpen={activeMenu === 'sort'}
              sortValue={sortBy}
              options={SORT_OPTIONS}
              icon={ArrowDownUp}
              type='filter'
              onToggle={() => toggleMenu('sort')}
              onChange={handleSortChange}
              ariaLabel='Sort repositories'
            />

            <RepositoryViewToggle view={view} onChange={setView} />
          </div>
        </div>

        <div ref={dropdownRef} className='repository-explorer__filter-bar'>
          <LanguageDropdown
            value={selectedLanguage}
            label={
              selectedLanguage === 'all' ? 'All languages' : selectedLanguage
            }
            isOpen={activeMenu === 'language'}
            languages={availableLanguages}
            onToggle={() => toggleMenu('language')}
            onChange={handleLanguageChange}
            ariaLabel='Filter by language'
          />

          <RepositoryDropdown
            repositoryValue={repositoryType}
            label={getTypeLabel(repositoryType)}
            isOpen={activeMenu === 'type'}
            options={TYPE_OPTIONS}
            onToggle={() => toggleMenu('type')}
            onChange={handleRepositoryTypeChange}
            ariaLabel='Filter by repository type'
          />

          <StarsDropdown
            starValue={starRange}
            label={getStarRangeLabel(starRange)}
            isOpen={activeMenu === 'stars'}
            options={STAR_OPTIONS}
            onToggle={() => toggleMenu('stars')}
            onChange={handleStarChange}
            ariaLabel='Filter by star count'
          />

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
