'use client';

import { motion, Variants } from 'framer-motion';

import PrivacySummaryCard from './PrivacySummaryCard';
import { PrivacySummaryProps } from '@/types/privacy/privacySummary/privacy.summary.type';

import '../../../styles/components/privacy/privacySummary/PrivacySummary.scss';

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      staggerChildren: 0.3,
      delay: 0.1,
    },
  },
};

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
      viewport={{ once: true, amount: 0.3 }}
      className='privacy-summary'
      aria-labelledby='privacy-summary-title'
    >
      <div className='privacy-summary__container'>
        <header className='privacy-summary__header'>
          <span className='privacy-summary__header--badge'>{badge}</span>

          <h2
            id='privacy-summary-title'
            className='privacy-summary__header--title'
          >
            {title}
          </h2>

          <p className='privacy-summary__header--subtitle'>{subtitle}</p>
        </header>

        <div className='privacy-summary__grid'>
          {items.map((item) => (
            <PrivacySummaryCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PrivacySummary;
