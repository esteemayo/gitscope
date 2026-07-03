'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import ProfileOverview from './ProfileOverview';
import ProfileHero from './ProfileHero';
import LatestRepositories from './LatestRepositories';
import Achievements from './Achievements';
import ActivitySummary from './activity/ActivitySummary';
import ProfileStats from './ProfileStats';
import LanguageDistribution from './languageDistribution/LanguageDistribution';

import ProfileStatsSkeleton from '../skeletons/profile/ProfileStatsSkeleton';
import ProfileHeroSkeleton from '../skeletons/profile/ProfileHeroSkeleton';
import RepositoryCardSkeleton from '../skeletons/profile/RepositoryCardSkeleton';
import AchievementSkeleton from '../skeletons/profile/AchievementSkeleton';
import ActivitySummarySkeleton from '../skeletons/profile/activity/ActivitySummarySkeleton';

import { pageVariants } from '@/animations/page';
import { fadeUpVariants } from '@/animations/fade';

import { getAchievements } from '@/utils/profile/getAchievements';
import { getTotalStars } from '@/utils/profile/getTotalStars';

import { ProfileClientProps } from '@/types/profile/profile.client.type';
import { mockActivitySummary } from '@/data/profile/mockActivitySummary';

import '../../styles/components/profile/ProfileClient.scss';

const ProfileClient = ({
  user,
  languages,
  repositories,
}: ProfileClientProps) => {
  const achievements = getAchievements(user, repositories);

  const [isLoadingUser, setIsLoadingUser] = useState(true);
  const [isLoadingRepo, setIsLoadingRepo] = useState(true);
  const [isLoadingActivity, setIsLoadingActivity] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoadingUser(false), 1200);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoadingRepo(false);
      setIsLoadingActivity(false);
    }, 2000);

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
          className='profile-client__section'
          aria-label='Profile Information'
        >
          <ProfileOverview user={user} isLoading={isLoadingUser} />
        </motion.section>

        <motion.section
          variants={fadeUpVariants}
          className='profile-client__section'
          aria-label='Language Distribution'
        >
          <LanguageDistribution languages={languages} />
        </motion.section>

        <motion.section
          variants={fadeUpVariants}
          className='profile-client__section'
        >
          {isLoadingActivity ? (
            <ActivitySummarySkeleton />
          ) : (
            <ActivitySummary metrics={mockActivitySummary} />
          )}
        </motion.section>

        <motion.section
          variants={fadeUpVariants}
          className='profile-client__section'
        >
          {isLoadingUser ? (
            <AchievementSkeleton />
          ) : (
            <Achievements achievements={achievements} />
          )}
        </motion.section>

        <motion.section
          variants={fadeUpVariants}
          className='profile-client__section'
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
