'use client';

import { useMemo } from 'react';
import { Bookmark, GitFork, Pin } from 'lucide-react';

import SavedStat from './SavedStat';
import { savedProfiles } from '@/data/saved/saved-profiles.data';

import '../../styles/components/saved/SavedStats.scss';

const SavedStats = () => {
  const pinnedProfiles = useMemo(
    () => savedProfiles.filter((profile) => profile.isPinned).length,
    [],
  );

  const totalRepos = useMemo(
    () => savedProfiles.reduce((acc, cur) => cur.repositories + acc, 0),
    [],
  );

  const savedStats = [
    {
      label: 'Saved profiles',
      value: savedProfiles.length,
      icon: Bookmark,
      accentColor: '#8B5CF6',
    },
    {
      label: 'Pinned profiles',
      value: pinnedProfiles,
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
