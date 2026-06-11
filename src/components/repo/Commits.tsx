import CommitItem from './CommitItem';
import EmptyState from '../ui/EmptyState';

import { Commit } from '@/types/repo/index';
import '../../styles/components/repo/Commits.scss';

interface CommitsProps {
  commits: Commit[];
}

const Commits = ({ commits }: CommitsProps) => {
  if (!commits.length) {
    return (
      <EmptyState
        title='No Recent Commits'
        description='No commit history is available for this repository.'
      />
    );
  }

  return (
    <div className='commits'>
      {commits.map((commit) => (
        <CommitItem key={commit.sha} {...commit} />
      ))}
    </div>
  );
};

export default Commits;
