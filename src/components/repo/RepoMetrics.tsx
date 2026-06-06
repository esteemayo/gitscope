import StarIcon from '../icons/StarIcon';
import MetricCard from './MetricCard';
import AlertIcon from '../icons/AlertIcon';
import ForkIcon from '../icons/ForkIcon';
import CodeIcon from '../icons/CodeIcon';

import { RepoMetricsProps } from '@/types/repo/repo.metrics.type';
import '../../styles/components/repo/RepoMetrics.scss';

const RepoMetrics = ({ stars, forks, issues, language }: RepoMetricsProps) => {
  return (
    <section className='repo-metrics'>
      <MetricCard
        icon={<StarIcon />}
        label='Stars'
        value={stars.toLocaleString()}
      />

      <MetricCard
        icon={<ForkIcon />}
        label='Forks'
        value={forks.toLocaleString()}
      />

      <MetricCard
        icon={<AlertIcon />}
        label='Issues'
        value={issues.toLocaleString()}
      />

      <MetricCard
        icon={<CodeIcon />}
        label='Language'
        value={language ?? 'Unknown'}
      />
    </section>
  );
};

export default RepoMetrics;
