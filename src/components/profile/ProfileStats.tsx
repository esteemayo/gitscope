'use client';

import { motion } from 'framer-motion';
import { Book, User, Users } from 'lucide-react';

import { GithubUser } from '@/types/profile';
import '../../styles/components/profile/ProfileStats.scss';

interface ProfileStatsProps {
  user: GithubUser;
}

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

        {stats.map((item, index) => {
          const { id, icon: Icon, label, value } = item;

          return (
            <motion.article
              key={id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className='profile-stats__card'
            >
              <div className='profile-stats__icon' aria-hidden='true'>
                <Icon size={20} />
              </div>

              <div className='profile-stats__content'>
                <strong className='profile-stats__value'>
                  {value.toLocaleString()}
                </strong>

                <span className='profile-stats__label'>{label}</span>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default ProfileStats;
