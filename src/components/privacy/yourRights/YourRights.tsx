'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import YourRightCard from './YourRightCard';
import RightsNotice from './RightsNotice';
import PrivacySectionHeader from '../PrivacySectionHeader';

import { containerVariants } from '@/animations/page';
import { YourRightsProps } from '@/types/privacy/yourRights/your.rights.type';

import '../../../styles/components/privacy/yourRights/YourRights.scss';

const YourRights = ({
  badge,
  title,
  subtitle,
  rights,
  notice,
  className,
  style,
}: YourRightsProps) => {
  return (
    <motion.section
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className={clsx('your-rights', className)}
      style={style}
      aria-labelledby='your-rights-title'
    >
      <div className='your-rights__container'>
        <PrivacySectionHeader
          id='your-rights-title'
          badge={badge}
          title={title}
          subtitle={subtitle}
          variants={containerVariants}
        />

        <div className='your-rights__grid'>
          {rights.map((right) => (
            <motion.div key={right.id} variants={containerVariants}>
              <YourRightCard {...right} />
            </motion.div>
          ))}
        </div>

        <motion.div variants={containerVariants}>
          <RightsNotice {...notice} />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default YourRights;
