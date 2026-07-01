'use client';

import { motion } from 'framer-motion';

import { ContributionCellProps } from '@/types/profile/contribution/contribution.cell.type';
import '../../../styles/components/profile/contributionHeatmap/ContributionCell.scss';

const ContributionCell = ({ day, onHover }: ContributionCellProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.25 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 500, damping: 20 }}
      type='button'
      className='contribution-cell'
      aria-label={`${day.count} contributions on ${day.date}`}
      onMouseEnter={() => onHover?.(day)}
      onMouseLeave={() => onHover?.(null)}
      onFocus={() => onHover?.(day)}
      onBlur={() => onHover?.(null)}
    />
  );
};

export default ContributionCell;
