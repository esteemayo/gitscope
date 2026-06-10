import Fact from './Fact';

import { getRelativeTime } from '@/utils/getRelativeTime';
import { RepoStatusProps } from '@/types/repo/repo.status.type';

import '../../styles/components/repo/RepoStatus.scss';

const RepoStatus = ({ status, lastCommitDate }: RepoStatusProps) => {
  return (
    <section className='repo-status'>
      <h3 className='repo-status__title'>Repository status</h3>

      <div className='repo-status__badge'>
        <span
          className={`repo-status__dot repo-status__dot--${status.toLowerCase()}`}
        />

        {status}
      </div>

      <Fact
        label='Last Commit'
        value={lastCommitDate ? getRelativeTime(lastCommitDate) : 'Unavailable'}
      />
    </section>
  );
};

export default RepoStatus;
