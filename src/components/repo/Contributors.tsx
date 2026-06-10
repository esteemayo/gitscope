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
        .sort((a, b) => b.contributions - a.contributions)
        .map((user, index) => (
          <ContributorCard key={user.id} contributor={user} rank={index + 1} />
        ))}
    </div>
  );
};

export default Contributors;
