import ContributorCard from './ContributorCard';
import { Contributor } from '@/types/repo/index';

import '../../styles/components/repo/Contributors.scss';

interface ContributorsProps {
  contributors: Contributor[];
}

const Contributors = ({ contributors }: ContributorsProps) => {
  return (
    <div className='contributors'>
      {contributors
        .sort((a, b) => a.rank - b.rank)
        .map((user) => (
          <ContributorCard key={user.id} {...user} />
        ))}
    </div>
  );
};

export default Contributors;
