'use client';

import { format } from 'date-fns';

import Fact from './Fact';
import { RepoFactsProps } from '@/types/repo/repo.facts.type';

import '../../styles/components/repo/RepoFacts.scss';

const RepoFacts = ({ branch, createdAt, updatedAt }: RepoFactsProps) => {
  return (
    <section className='repo-facts'>
      <h3 className='repo-facts__title'>Repository facts</h3>

      <Fact
        label='Created'
        value={format(new Date(createdAt), 'MMM d, yyyy')}
      />

      <Fact
        label='Updated'
        value={format(new Date(updatedAt), 'MMM d, yyyy')}
      />

      <Fact label='Branch' value={branch} />
    </section>
  );
};

export default RepoFacts;
