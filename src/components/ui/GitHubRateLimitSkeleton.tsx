'use client';

import Skeleton from 'react-loading-skeleton';
import '../../styles/components/ui/GitHubRateLimitSkeleton.scss';

const GitHubRateLimitSkeleton = () => {
  return (
    <div
      className='github-rate-limit-skeleton'
      aria-label='Loading GitHub API rate limit'
      role='status'
    >
      <Skeleton circle width={15} height={15} />

      <Skeleton width={25} height={10} />

      <Skeleton width={38} height={10} />
    </div>
  );
};

export default GitHubRateLimitSkeleton;
