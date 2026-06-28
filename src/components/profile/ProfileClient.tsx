'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import Achievements from './Achievements';
import ProfileHero from './ProfileHero';
import CurrentTimeCard from './CurrentTimeCard';
import ProfileMeta from './ProfileMeta';
import LatestRepositories from './LatestRepositories';
import ProfileStats from './ProfileStats';

import ProfileHeroSkeleton from '../skeletons/profile/ProfileHeroSkeleton';
import CurrentTimeSkeleton from '../skeletons/profile/CurrentTimeSkeleton';
import ProfileStatsSkeleton from '../skeletons/profile/ProfileStatsSkeleton';
import ProfileMetaSkeleton from '../skeletons/profile/ProfileMetaSkeleton';
import AchievementSkeleton from '../skeletons/profile/AchievementSkeleton';
import RepositoryCardSkeleton from '../skeletons/profile/RepositoryCardSkeleton';

import { pageVariants } from '@/animations/page';
import { fadeUpVariants } from '@/animations/fade';

import { getAchievements } from '@/utils/profile/getAchievements';
import { getTotalStars } from '@/utils/profile/getTotalStars';
import { ProfileClientProps } from '@/types/profile/profile.client.type';

import '../../styles/components/profile/ProfileClient.scss';

const ProfileClient = ({ user, repositories }: ProfileClientProps) => {
  const achievements = getAchievements(user, repositories);

  const [isLoadingUser, setIsLoadingUser] = useState(true);
  const [isLoadingRepo, setIsLoadingRepo] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoadingUser(false), 1200);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoadingRepo(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.main
      variants={pageVariants}
      initial='hidden'
      animate='visible'
      className='profile-client'
      aria-labelledby='profile-client-title'
    >
      <div className='profile-client__container'>
        <h1 id='profile-client-title' className='sr-only'>
          GitHub Profiles
        </h1>

        <motion.section
          variants={fadeUpVariants}
          className='profile-client__hero'
          aria-label='Profile Overview'
        >
          {isLoadingUser ? (
            <ProfileHeroSkeleton />
          ) : (
            <ProfileHero user={user} />
          )}

          {isLoadingUser ? (
            <ProfileStatsSkeleton />
          ) : (
            <ProfileStats
              user={user}
              totalStars={getTotalStars(repositories)}
            />
          )}
        </motion.section>

        <motion.section
          variants={fadeUpVariants}
          className='profile-client__meta'
          aria-label='Profile Information'
        >
          <div className='profile-client__side'>
            {isLoadingUser ? (
              <ProfileMetaSkeleton />
            ) : (
              <ProfileMeta user={user} />
            )}

            {isLoadingUser ? (
              <CurrentTimeSkeleton />
            ) : (
              <CurrentTimeCard location={user.location} />
            )}
          </div>
        </motion.section>

        <motion.section
          variants={fadeUpVariants}
          className='profile-client__achievements'
        >
          {isLoadingUser ? (
            <AchievementSkeleton />
          ) : (
            <Achievements achievements={achievements} />
          )}
        </motion.section>

        <motion.section
          variants={fadeUpVariants}
          className='profile-client__repositories'
        >
          {isLoadingRepo ? (
            <RepositoryCardSkeleton />
          ) : (
            <LatestRepositories repositories={repositories} />
          )}
        </motion.section>
      </div>
    </motion.main>
  );
};

export default ProfileClient;
