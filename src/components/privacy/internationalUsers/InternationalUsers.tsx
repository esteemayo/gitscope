'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import InternationalUsersPanel from './InternationalUsersPanel';
import SectionIntro from '@/components/ui/SectionIntro';
import InternationalUsersNotice from './InternationalUsersNotice';

import { containerVariants } from '@/animations/page';
import { InternationalUsersProps } from '@/types/privacy/internationalUsers/international.users.type';

import '../../../styles/components/privacy/internationalUsers/InternationalUsers.scss';

const InternationalUsers = ({
  badge,
  title,
  subtitle,
  panel,
  notice,
  className,
  style,
}: InternationalUsersProps) => {
  return (
    <motion.section
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className={clsx('international-users', className)}
      style={style}
      aria-labelledby='international-users-title'
    >
      <div className='international-users__container'>
        <SectionIntro
          id='international-users-title'
          badge={badge}
          title={title}
          description={subtitle}
          variants={containerVariants}
        />

        <div className='international-users__body'>
          <motion.div variants={containerVariants}>
            <InternationalUsersPanel {...panel} />
          </motion.div>

          <motion.div variants={containerVariants}>
            <InternationalUsersNotice {...notice} />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default InternationalUsers;
