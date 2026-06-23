import RepositoryCard from './RepositoryCard';
import { RepositoryType } from '@/types/profile';

import '../../styles/components/profile/LatestRepositories.scss';

interface LatestRepositoriesProps {
  repositories: RepositoryType[];
}

const LatestRepositories = ({ repositories }: LatestRepositoriesProps) => {
  return (
    <section
      className='latest-repositories'
      aria-labelledby='latest-repos-title'
    >
      <div className='latest-repositories__container'>
        <h2 id='latest-repos-title' className='latest-repositories__heading'>
          Latest repositories
        </h2>

        <div className='latest-repositories__grid'>
          {repositories.map((repository) => (
            <RepositoryCard key={repository.id} {...repository} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestRepositories;
