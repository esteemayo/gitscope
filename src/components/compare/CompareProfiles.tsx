'use client';

import { motion } from 'framer-motion';

import SectionHeader from '../ui/SectionHeader';
import UserIcon from '../icons/UserIcon';
import CompareProfileCard from './CompareProfileCard';

import { getLeaderBadge } from '@/utils/compare/getLeaderBadge';
import { mostRecentRepo } from '@/utils/compare/mostRecentRepo';

import { CompareProfilesProps } from '@/types/compare/compare.profiles.type';
import '../../styles/components/CompareProfiles.scss';

const CompareProfiles = ({
  userA,
  userB,
  reposA,
  reposB,
}: CompareProfilesProps) => {
  const latestActivityA = new Date(mostRecentRepo(reposA).updated_at).getTime();
  const latestActivityB = new Date(mostRecentRepo(reposB).updated_at).getTime();

  const userABadge = getLeaderBadge(
    userA,
    userB,
    latestActivityA,
    latestActivityB,
  );

  const userBBadge = getLeaderBadge(
    userB,
    userA,
    latestActivityB,
    latestActivityA,
  );

  return (
    <section className='compare-profiles'>
      <SectionHeader
        icon={<UserIcon />}
        title='Developer profiles'
        description='Side-by-side GitHub profile comparison'
      />

      <div className='compare-profiles__grid'>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <CompareProfileCard
            user={userA}
            repos={reposA}
            label='User A'
            leaderBadge={userABadge ?? undefined}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <CompareProfileCard
            user={userB}
            repos={reposB}
            label='User B'
            leaderBadge={userBBadge ?? undefined}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CompareProfiles;
