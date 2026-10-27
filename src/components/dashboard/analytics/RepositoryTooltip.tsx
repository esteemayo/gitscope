'use client';

import { RepositoryComparison } from '@/types/dashboard/analytics';
import '../../../styles/components/dashboard/analytics/RepositoryTooltip.scss';

interface RepositoryTooltipProps {
  active?: boolean;
  payload?: Array<{
    payload: RepositoryComparison;
  }>;
}

const RepositoryTooltip = ({ active, payload }: RepositoryTooltipProps) => {
  if (!active || !payload?.length) {
    return null;
  }

  const repository = payload[0].payload;

  return (
    <div className='repository-tooltip'>
      <h4 className='repository-tooltip__title'>{repository.name}</h4>

      <p>
        <span className='repository-tooltip__star-dot' aria-hidden='true' />
        Stars: {repository.stars.toLocaleString()}
      </p>

      <p>
        <span className='repository-tooltip__fork-dot' aria-hidden='true' />
        Forks: {repository.forks.toLocaleString()}
      </p>
    </div>
  );
};

export default RepositoryTooltip;
