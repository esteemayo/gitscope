import EmptyState from '../ui/EmptyState';

import ProfileHeading from './ProfileHeading';
import RepositoryCard from './RepositoryCard';

import { LatestRepositoriesProps } from '@/types/profile/latest.prepositories.type';
import '../../styles/components/profile/LatestRepositories.scss';

const LatestRepositories = ({ repositories }: LatestRepositoriesProps) => {
  return (
    <section
      className='latest-repositories'
      aria-labelledby='latest-repos-title'
    >
      <div className='latest-repositories__container'>
        <ProfileHeading
          id='latest-repos-title'
          title='Latest repositories'
          description='Recently updated projects'
        />

        {(repositories ?? []).length === 0 ? (
          <EmptyState
            title='No repositories found.'
            description="You've not created any repository."
          />
        ) : (
          <div className='latest-repositories__grid'>
            {repositories.slice(0, 8).map((repository) => (
              <RepositoryCard key={repository.id} repository={repository} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestRepositories;
