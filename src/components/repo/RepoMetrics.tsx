import { Code2, GitFork } from 'lucide-react';

import StarIcon from '../icons/StarIcon';
import MetricCard from './MetricCard';
import AlertIcon from '../icons/AlertIcon';

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
        icon={<GitFork />}
        label='Forks'
        value={forks.toLocaleString()}
      />

      <MetricCard
        icon={<AlertIcon />}
        label='Issues'
        value={issues.toLocaleString()}
      />

      <MetricCard
        icon={<Code2 />}
        label='Language'
        value={language ?? 'Unknown'}
      />
    </section>
  );
};

export default RepoMetrics;
