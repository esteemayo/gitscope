import clsx from 'clsx';

import RepositoryEmptyState from './RepositoryEmptyState';
import RepoCard from './RepoCard';
import RepoCardSkeleton from '@/components/skeletons/dashboard/RepoCardSkeleton';

import { RepositoryListProps } from '@/types/dashboard/repository/repository.list.type';
import '../../../styles/components/dashboard/repositoryExplorer/RepositoryList.scss';

const RepositoryList = ({
  view,
  repositories,
  isLoading,
  onReset,
}: RepositoryListProps) => {
  return (
    <div
      className={clsx('repository-list', {
        'repository-list__grid-view': view === 'grid',
        'repository-list__list-view': view === 'list',
      })}
    >
      {(repositories ?? []).length > 0 ? (
        isLoading ? (
          Array.from({ length: 6 }, (_, index) => (
            <RepoCardSkeleton key={`repo-skeleton-${index}`} view={view} />
          ))
        ) : (
          (repositories ?? []).map((repository) => (
            <RepoCard key={repository.id} repository={repository} view={view} />
          ))
        )
      ) : (
        <RepositoryEmptyState
          title='No repositories found'
          description='Try changing your search or removing some filters.'
          btnLabel='Clear all filters'
          onReset={onReset}
        />
      )}
    </div>
  );
};

export default RepositoryList;
