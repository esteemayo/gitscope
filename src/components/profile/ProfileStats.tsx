'use client';

import { FolderGit2, Star, UserPlus2, Users2 } from 'lucide-react';

import ProfileMetric from './ProfileMetric';
import { ProfileStatsProps } from '@/types/profile/profile.stats.type';

import '../../styles/components/profile/ProfileStats.scss';

const ProfileStats = ({ user, totalStars }: ProfileStatsProps) => {
  const stats = [
    {
      id: 'followers',
      label: 'Followers',
      value: user.followers,
      icon: Users2,
    },
    {
      id: 'following',
      label: 'Following',
      value: user.following,
      icon: UserPlus2,
    },
    {
      id: 'repositories',
      label: 'Repositories',
      value: user.public_repos,
      icon: FolderGit2,
    },
    {
      id: 'stars-earned',
      label: 'Stars Earned',
      value: totalStars,
      icon: Star,
    },
  ];

  return (
    <div className='profile-stats' aria-labelledby='profile-stats-title'>
      <div className='profile-stats__container'>
        <h2 id='profile-stats-title' className='sr-only'>
          Profile statistics
        </h2>

        {stats.map((item, index) => (
          <ProfileMetric key={item.id} index={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ProfileStats;
