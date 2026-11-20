import { RepositoryResultsProps } from '@/types/dashboard/repository/repository.results.type';
import '../../../styles/components/dashboard/repositoryExplorer/RepositoryResults.scss';

const RepositoryResults = ({
  totalResults,
  totalRepositories,
  sortLabel,
  activeFilterCount,
}: RepositoryResultsProps) => {
  return (
    <div className='repository-results'>
      <div className='repository-results__info'>
        <span className='repository-results__info--text'>
          Showing <strong>{totalResults}</strong> of{' '}
          <strong>{totalRepositories}</strong> repositories
        </span>

        {activeFilterCount > 0 && (
          <span className='repository-results__info--count'>
            {activeFilterCount} active{' '}
            {activeFilterCount === 1 ? 'filter' : 'filters'}
          </span>
        )}
      </div>

      <span className='repository-results__hint'>
        Sorted by {sortLabel.toLowerCase()}
      </span>
    </div>
  );
};

export default RepositoryResults;
