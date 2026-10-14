'use client';

import { useMemo } from 'react';
import { Bookmark, GitFork, Pin } from 'lucide-react';

import SavedStat from './SavedStat';
import { SavedStatsProps } from '@/types/saved/stats/saved.stats.type';

import '../../styles/components/saved/SavedStats.scss';

const SavedStats = ({ profiles, totalPinned }: SavedStatsProps) => {
  const totalRepos = useMemo(
    () => profiles.reduce((acc, profile) => acc + profile.repositories, 0),
    [profiles],
  );

  const savedStats = [
    {
      label: 'Saved profiles',
      value: profiles.length,
      icon: Bookmark,
      accentColor: '#8B5CF6',
    },
    {
      label: 'Pinned profiles',
      value: totalPinned,
      icon: Pin,
      accentColor: '#F59E0B',
    },
    {
      label: 'Repositories',
      value: totalRepos,
      icon: GitFork,
      accentColor: '#3B82F6',
    },
  ];

  return (
    <section className='saved-stats' aria-label='Saved collection statistics'>
      {savedStats.map((stat) => (
        <SavedStat key={stat.label} {...stat} />
      ))}
    </section>
  );
};

export default SavedStats;
