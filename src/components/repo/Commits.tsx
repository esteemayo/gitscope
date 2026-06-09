import CommitItem from './CommitItem';
import { Commit } from '@/types/repo/index';

import '../../styles/components/repo/Commits.scss';

interface CommitsProps {
  commits: Commit[];
}

const Commits = ({ commits }: CommitsProps) => {
  return (
    <div className='commits'>
      {commits.map((commit) => (
        <CommitItem key={commit.sha} {...commit} />
      ))}
    </div>
  );
};

export default Commits;
