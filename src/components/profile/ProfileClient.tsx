'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import ProfileOverview from './ProfileOverview';
import ProfileHero from './ProfileHero';
import LatestRepositories from './LatestRepositories';
import Achievements from './Achievements';
import LanguageDistribution from './languageDistribution/LanguageDistribution';
import ProfileStats from './ProfileStats';

import ProfileStatsSkeleton from '../skeletons/profile/ProfileStatsSkeleton';
import ProfileHeroSkeleton from '../skeletons/profile/ProfileHeroSkeleton';
import RepositoryCardSkeleton from '../skeletons/profile/RepositoryCardSkeleton';
import AchievementSkeleton from '../skeletons/profile/AchievementSkeleton';

import { pageVariants } from '@/animations/page';
import { fadeUpVariants } from '@/animations/fade';

import { getAchievements } from '@/utils/profile/getAchievements';
import { getTotalStars } from '@/utils/profile/getTotalStars';
import { ProfileClientProps } from '@/types/profile/profile.client.type';

import '../../styles/components/profile/ProfileClient.scss';
import { mockLanguages } from '@/data/profile';

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
          <ProfileOverview user={user} isLoading={isLoadingUser} />
        </motion.section>

        <motion.section
          variants={fadeUpVariants}
          className='profile-client__meta'
          aria-label='Profile Information'
        >
          <LanguageDistribution languages={mockLanguages} />
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
