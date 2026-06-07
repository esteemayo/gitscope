'use client';

import { format } from 'date-fns';
import { CalendarDays, Clock3, GitBranch } from 'lucide-react';

import SummaryCard from './SummaryCard';
import { RepoSummaryProps } from '@/types/repo/repo.summary.type';

import '../../styles/components/repo/RepoSummary.scss';

const RepoSummary = ({ createdAt, updatedAt, branch }: RepoSummaryProps) => {
  return (
    <section className='repo-summary'>
      <SummaryCard
        icon={<CalendarDays size={16} />}
        label='Created'
        value={format(new Date(createdAt), 'MMM d, yyyy')}
      />

      <SummaryCard
        icon={<Clock3 size={16} />}
        label='Last updated'
        value={format(new Date(updatedAt), 'MMM d, yyyy')}
      />

      <SummaryCard
        icon={<GitBranch size={16} />}
        label='Default branch'
        value={branch}
      />
    </section>
  );
};

export default RepoSummary;
