'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import PolicyUpdatesNotice from './PolicyUpdatesNotice';
import PolicyUpdateItem from './PolicyUpdateItem';
import PrivacySectionHeader from '../PrivacySectionHeader';

import { containerVariants } from '@/animations/page';
import { PolicyUpdatesTimelineProps } from '@/types/privacy/policyUpdatesTimeline/policy.updates.timeline.type';

import '../../../styles/components/privacy/policyUpdatesTimeline/PolicyUpdatesTimeline.scss';

const PolicyUpdatesTimeline = ({
  badge,
  title,
  subtitle,
  updates,
  notice,
  className,
  style,
}: PolicyUpdatesTimelineProps) => {
  return (
    <motion.section
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className={clsx('policy-updates-timeline', className)}
      style={style}
      aria-labelledby='policy-updates-timeline-title'
    >
      <div className='policy-updates-timeline__container'>
        <PrivacySectionHeader
          id='policy-updates-timeline-title'
          badge={badge}
          title={title}
          subtitle={subtitle}
          variants={containerVariants}
        />

        <div className='policy-updates-timeline__body'>
          <div className='policy-updates-timeline__track'>
            {updates.map((update) => (
              <PolicyUpdateItem key={update.id} {...update} />
            ))}
          </div>

          <motion.div variants={containerVariants}>
            <PolicyUpdatesNotice {...notice} />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default PolicyUpdatesTimeline;
