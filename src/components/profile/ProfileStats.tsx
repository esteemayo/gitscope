'use client';

import { Book, User, Users } from 'lucide-react';

import ProfileStatsCard from './ProfileStatsCard';
import { ProfileStatsProps } from '@/types/profile/profile.stats.type';

import '../../styles/components/profile/ProfileStats.scss';

const ProfileStats = ({ user }: ProfileStatsProps) => {
  const stats = [
    {
      id: 'followers',
      label: 'Followers',
      value: user.followers,
      icon: Users,
    },
    {
      id: 'following',
      label: 'Following',
      value: user.following,
      icon: User,
    },
    {
      id: 'repositories',
      label: 'Repositories',
      value: user.public_repos,
      icon: Book,
    },
  ];

  return (
    <section className='profile-stats' aria-labelledby='profile-stats-title'>
      <div className='profile-stats__container'>
        <h2 id='profile-stats-title' className='sr-only'>
          Profile statistics
        </h2>

        {stats.map((item, index) => (
          <ProfileStatsCard key={item.id} index={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default ProfileStats;
