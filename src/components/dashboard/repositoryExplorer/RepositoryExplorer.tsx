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
import { GitHubRepository, RepositoryView } from '@/types/repository.type';

import '../../../styles/components/dashboard/repositoryExplorer/RepositoryExplorer.scss';

export const MOCK_REPOSITORIES: GitHubRepository[] = [
  {
    id: 1,
    name: 'overlay-lab',
    full_name: 'esteemayo/overlay-lab',
    description:
      'Accessible popup architecture with reusable modal and drawer primitives.',
    html_url: 'https://github.com/esteemayo/overlay-lab',
    language: 'TypeScript',
    stargazers_count: 42,
    forks_count: 8,
    open_issues_count: 3,
    watchers_count: 42,
    default_branch: 'main',
    created_at: '2026-06-12T10:00:00Z',
    updated_at: '2026-10-18T14:30:00Z',
    pushed_at: '2026-10-18T14:30:00Z',
    fork: false,
    archived: false,
    private: false,
    topics: ['react', 'accessibility', 'nextjs'],
    license: {
      name: 'MIT License',
      spdx_id: 'MIT',
    },
  },
  {
    id: 2,
    name: 'gitscope',
    full_name: 'esteemayo/gitscope',
    description:
      'A GitHub analytics platform for exploring developer profiles and repository insights.',
    html_url: 'https://github.com/esteemayo/gitscope',
    language: 'TypeScript',
    stargazers_count: 18,
    forks_count: 4,
    open_issues_count: 6,
    watchers_count: 18,
    default_branch: 'main',
    created_at: '2026-07-01T09:00:00Z',
    updated_at: '2026-10-20T11:00:00Z',
    pushed_at: '2026-10-20T11:00:00Z',
    fork: false,
    archived: false,
    private: false,
    topics: ['github-api', 'analytics', 'nextjs'],
    license: null,
  },
  {
    id: 3,
    name: 'dev-store',
    full_name: 'esteemayo/dev-store',
    description:
      'An e-commerce application with reusable product components and a structured backend API.',
    html_url: 'https://github.com/esteemayo/dev-store',
    language: 'JavaScript',
    stargazers_count: 12,
    forks_count: 3,
    open_issues_count: 2,
    watchers_count: 12,
    default_branch: 'main',
    created_at: '2026-04-10T08:00:00Z',
    updated_at: '2026-10-14T16:00:00Z',
    pushed_at: '2026-10-14T16:00:00Z',
    fork: false,
    archived: false,
    private: false,
    topics: ['ecommerce', 'express', 'zustand'],
    license: {
      name: 'MIT License',
      spdx_id: 'MIT',
    },
  },
  {
    id: 4,
    name: 'blog-platform',
    full_name: 'esteemayo/blog-platform',
    description:
      'A full-stack publishing platform with authentication and rich text editing.',
    html_url: 'https://github.com/esteemayo/blog-platform',
    language: 'TypeScript',
    stargazers_count: 9,
    forks_count: 2,
    open_issues_count: 1,
    watchers_count: 9,
    default_branch: 'main',
    created_at: '2026-03-05T12:00:00Z',
    updated_at: '2026-10-07T13:00:00Z',
    pushed_at: '2026-10-07T13:00:00Z',
    fork: false,
    archived: false,
    private: false,
    topics: ['mongodb', 'express', 'blog'],
    license: null,
  },
  {
    id: 5,
    name: 'api-starter',
    full_name: 'esteemayo/api-starter',
    description:
      'A lightweight REST API starter with structured error handling.',
    html_url: 'https://github.com/esteemayo/api-starter',
    language: 'JavaScript',
    stargazers_count: 6,
    forks_count: 1,
    open_issues_count: 0,
    watchers_count: 6,
    default_branch: 'main',
    created_at: '2025-12-10T08:00:00Z',
    updated_at: '2026-09-25T15:00:00Z',
    pushed_at: '2026-09-25T15:00:00Z',
    fork: false,
    archived: true,
    private: false,
    topics: ['nodejs', 'rest-api'],
    license: {
      name: 'MIT License',
      spdx_id: 'MIT',
    },
  },
  {
    id: 6,
    name: 'chat-app',
    full_name: 'esteemayo/chat-app',
    description:
      'A real-time messaging application with persistent chat history.',
    html_url: 'https://github.com/esteemayo/chat-app',
    language: 'TypeScript',
    stargazers_count: 4,
    forks_count: 0,
    open_issues_count: 2,
    watchers_count: 4,
    default_branch: 'main',
    created_at: '2026-08-01T10:00:00Z',
    updated_at: '2026-10-19T17:00:00Z',
    pushed_at: '2026-10-19T17:00:00Z',
    fork: false,
    archived: false,
    private: false,
    topics: ['socketio', 'mongodb', 'realtime'],
    license: null,
  },
];

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
            <Search size={17} />

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
              <SlidersHorizontal size={16} />
              Filters
              <span className='repository-explorer__actions--filter-count'>
                2
              </span>
            </button>

            <button
              type='button'
              className='repository-explorer__actions--btn-sort'
            >
              <ArrowDownUp size={16} />
              Recently updated
              <ChevronDown size={16} />
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
                <LayoutGrid size={18} />
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
                <List size={18} />
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
            <ChevronDown size={14} />
          </button>

          <button
            type='button'
            className='repository-explorer__btn-filter-chip'
          >
            All repositories
            <ChevronDown size={14} />
          </button>

          <button
            type='button'
            className='repository-explorer__btn-filter-chip'
          >
            Any star count
            <ChevronDown size={14} />
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
