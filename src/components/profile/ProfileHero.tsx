'use client';

import { motion } from 'framer-motion';

import Avatar from '../dashboard/Avatar';

import { formatDate } from '@/utils/formatDate';
import { GithubUser } from '@/types/profile';
import { fadeUpVariants } from '@/animations/fade';

import '../../styles/components/profile/ProfileHero.scss';

interface ProfileHeroProps {
  user: GithubUser;
}

const ProfileHero = ({ user }: ProfileHeroProps) => {
  return (
    <motion.header
      variants={fadeUpVariants}
      transition={{ duration: 0.35 }}
      className='profile-hero'
      aria-labelledby='profile-name'
    >
      <div className='profile-hero__container'>
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.45 }}
          className='profile-hero__avatar'
        >
          <Avatar
            imgSrc={user.avatar_url}
            name={user.name}
            size={150}
            alt={`${user.login} github avatar`}
          />
        </motion.div>

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
