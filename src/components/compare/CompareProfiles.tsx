'use client';

import { motion } from 'framer-motion';

import SectionHeader from '../ui/SectionHeader';
import UserIcon from '../icons/UserIcon';
import CompareProfileCard from './CompareProfileCard';

import { CompareProfilesProps } from '@/types/compare/compare.profiles.type';
import '../../styles/components/CompareProfiles.scss';

const CompareProfiles = ({
  userA,
  userB,
  reposA,
  reposB,
}: CompareProfilesProps) => {
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
          <CompareProfileCard user={userA} repos={reposA} label='User A' />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <CompareProfileCard user={userB} repos={reposB} label='User B' />
        </motion.div>
      </div>
    </section>
  );
};

export default CompareProfiles;
