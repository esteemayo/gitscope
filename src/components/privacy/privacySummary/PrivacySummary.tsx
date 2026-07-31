'use client';

import { motion } from 'framer-motion';

import PrivacySummaryCard from './PrivacySummaryCard';
import PrivacySectionHeader from '../PrivacySectionHeader';

import { containerVariants } from '@/animations/page';
import { PrivacySummaryProps } from '@/types/privacy/privacySummary/privacy.summary.type';

import '../../../styles/components/privacy/privacySummary/PrivacySummary.scss';

const PrivacySummary = ({
  badge,
  title,
  subtitle,
  items,
}: PrivacySummaryProps) => {
  return (
    <motion.section
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className='privacy-summary'
      aria-labelledby='privacy-summary-title'
    >
      <div className='privacy-summary__container'>
        <PrivacySectionHeader
          id='privacy-summary-title'
          badge={badge}
          title={title}
          subtitle={subtitle}
          variants={containerVariants}
        />

        <div className='privacy-summary__grid'>
          {items.map((item) => (
            <motion.div key={item.id} variants={containerVariants}>
              <PrivacySummaryCard item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PrivacySummary;
