'use client';

import { motion } from 'framer-motion';
import Avatar from '../dashboard/Avatar';

import { GithubUser } from '@/types/profile';
import { formatDate } from '@/utils/formatDate';

import '../../styles/components/profile/ProfileHero.scss';

interface ProfileHeroProps {
  user: GithubUser;
}

const ProfileHero = ({ user }: ProfileHeroProps) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className='profile-hero'
      aria-labelledby='profile-name'
    >
      <div className='profile-hero__container'>
        <div className='profile-hero__avatar'>
          <Avatar
            name={user.name}
            size={120}
            alt={`${user.login} github avatar`}
          />
        </div>

        <div className='profile-hero__content'>
          <h1 id='profile-name' className='profile-hero__content--name'>
            {user.name}
          </h1>

          <span className='profile-hero__content--username'>@{user.login}</span>

          {user.bio && <p className='profile-hero__content--bio'>{user.bio}</p>}

          <div className='profile-hero__content--joined'>
            <span>Member since</span>

            <strong>{formatDate(user.created_at, true)}</strong>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default ProfileHero;
