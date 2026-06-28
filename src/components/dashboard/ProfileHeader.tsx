'use client';

import { motion } from 'framer-motion';

import ShareProfile from './ShareProfile';
import Avatar from './Avatar';
import ProfileStatsCard from './ProfileStatsCard';

import MapPinIcon from '../icons/MapPinIcon';
import CalendarIcon from '../icons/CalendarIcon';

import { formatDate } from '@/utils/formatDate';
import '../../styles/components/ProfileHeader.scss';

const ProfileHeader = ({ username }: { username: string }) => {
  return (
    <section className='profile-header'>
      <div className='profile-header__container'>
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.45 }}
          className='profile-header__avatar'
        >
          <Avatar imgSrc='/avatar-2.jpg' alt='avatar' name='Emmanuel Adebayo' />
        </motion.div>

        <h1 className='profile-header__name'>Emmanuel Adebayo</h1>

        <h2 className='profile-header__username'>
          <a
            href={`https://github.com/${username}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            @{username}
          </a>

          <ShareProfile username={username} />
        </h2>

        <p className='profile-header__bio'>
          Full Stack Web Developer → MERN | MEVN | GraphQL | NextJS | React
          Native | TypeScript
        </p>

        <div className='profile-header__info'>
          <span className='profile-header__info--item'>
            <MapPinIcon />
            Lagos, Nigeria
          </span>

          <span className='profile-header__info--item'>
            <CalendarIcon />
            Joined {formatDate(new Date())}
          </span>
        </div>

        <div className='profile-header__stats'>
          <ProfileStatsCard value={2000} label='Repositories' />
          <ProfileStatsCard value={1400} label='Followers' />
          <ProfileStatsCard value={4500} label='Following' />
        </div>
      </div>
    </section>
  );
};

export default ProfileHeader;
