'use client';

import { Bookmark, GitFork, Pin } from 'lucide-react';
import SavedStat from './SavedStat';

import '../../styles/components/saved/SavedStats.scss';

const savedStats = [
  {
    label: 'Saved profiles',
    value: 12,
    icon: Bookmark,
    accentColor: '#8B5CF6',
  },
  {
    label: 'Pinned profiles',
    value: 3,
    icon: Pin,
    accentColor: '#F59E0B',
  },
  {
    label: 'Repositories',
    value: 847,
    icon: GitFork,
    accentColor: '#3B82F6',
  },
];

const SavedStats = () => {
  return (
    <section className='saved-stats' aria-label='Saved collection statistics'>
      {savedStats.map((stat) => (
        <SavedStat key={stat.label} {...stat} />
      ))}
    </section>
  );
};

export default SavedStats;
