'use client';

import clsx from 'clsx';
import { LayoutGrid, List } from 'lucide-react';

import { RepositoryViewToggleProps } from '@/types/dashboard/repository/repository.view.toggle.type';
import '../../../styles/components/dashboard/repositoryExplorer/RepositoryViewToggle.scss';

const RepositoryViewToggle = ({
  view,
  onChange,
  className,
  style,
}: RepositoryViewToggleProps) => {
  return (
    <div
      className={clsx('repository-view-toggle', className)}
      style={style}
      role='group'
      aria-label='Repository display mode'
    >
      <button
        type='button'
        onClick={() => onChange('grid')}
        className={clsx('repository-view-toggle__btn', {
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
        onClick={() => onChange('list')}
        className={clsx('repository-view-toggle__btn', {
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
  );
};

export default RepositoryViewToggle;
