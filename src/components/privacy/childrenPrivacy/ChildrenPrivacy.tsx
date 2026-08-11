'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import PrivacySectionHeader from '../PrivacySectionHeader';
import ChildrenPrivacyPanel from './ChildrenPrivacyPanel';
import ChildrenPrivacyNotice from './ChildrenPrivacyNotice';

import { containerVariants } from '@/animations/page';
import { ChildrenPrivacyProps } from '@/types/privacy/childrenPrivacy/children.privacy.type';

import '../../../styles/components/privacy/childrenPrivacy/ChildrenPrivacy.scss';

const ChildrenPrivacy = ({
  badge,
  title,
  subtitle,
  panel,
  notice,
  className,
  style,
}: ChildrenPrivacyProps) => {
  return (
    <motion.section
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className={clsx('children-privacy', className)}
      style={style}
      aria-labelledby='children-privacy-title'
    >
      <div className='children-privacy__container'>
        <PrivacySectionHeader
          id='children-privacy-title'
          badge={badge}
          title={title}
          subtitle={subtitle}
          variants={containerVariants}
        />

        <div className='children-privacy__body'>
          <motion.div variants={containerVariants}>
            <ChildrenPrivacyPanel {...panel} />
          </motion.div>

          <motion.div variants={containerVariants}>
            <ChildrenPrivacyNotice {...notice} />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ChildrenPrivacy;
