'use client';

import { motion } from 'framer-motion';
import { TermsSectionHeaderProps } from '@/types/terms';

import '../../styles/components/terms/TermsSectionHeader.scss';

const TermsSectionHeader = ({
  id,
  badge,
  title,
  description,
  variants,
}: TermsSectionHeaderProps) => {
  return (
    <motion.header variants={variants} className='terms-section-header'>
      <motion.span variants={variants} className='terms-section-header--badge'>
        {badge}
      </motion.span>

      <motion.h2
        variants={variants}
        id={id}
        className='terms-section-header--title'
      >
        {title}
      </motion.h2>

      <motion.p
        variants={variants}
        className='terms-section-header--description'
      >
        {description}
      </motion.p>
    </motion.header>
  );
};

export default TermsSectionHeader;
