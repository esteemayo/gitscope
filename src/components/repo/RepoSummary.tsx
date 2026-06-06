'use client';

import { format } from 'date-fns';

import SummaryCard from './SummaryCard';
import { RepoSummaryProps } from '@/types/repo/repo.summary.type';

import '../../styles/components/repo/RepoSummary.scss';

const RepoSummary = ({ createdAt, updatedAt, branch }: RepoSummaryProps) => {
  return (
    <section className='repo-summary'>
      <SummaryCard
        label='Created'
        value={format(new Date(createdAt), 'MMM d, yyyy')}
      />

      <SummaryCard
        label='Updated'
        value={format(new Date(updatedAt), 'MMM d, yyyy')}
      />

      <SummaryCard label='Branch' value={branch} />
    </section>
  );
};

export default RepoSummary;
