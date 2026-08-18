'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import TermsSummaryCard from './TermsSummaryCard';
import TermsSectionHeader from '../TermsSectionHeader';

import { containerVariants } from '@/animations/page';
import { TermsSummaryProps } from '@/types/terms/summary/terms.summary.type';

import '../../../styles/components/terms/summary/TermsSummary.scss';

const TermsSummary = ({
  badge,
  title,
  description,
  headerIcon,
  cards,
  className,
  style,
}: TermsSummaryProps) => {
  return (
    <motion.section
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className={clsx('terms-summary', className)}
      style={style}
      aria-labelledby='term-summary-title'
    >
      <div className='terms-summary__container'>
        <TermsSectionHeader
          id='term-summary-title'
          badge={badge}
          title={title}
          description={description}
          icon={headerIcon}
          variants={containerVariants}
        />

        <div className='terms-summary__grid'>
          {cards.map((card, index) => (
            <motion.div key={card.id} variants={containerVariants}>
              <TermsSummaryCard {...card} count={index + 1} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TermsSummary;
