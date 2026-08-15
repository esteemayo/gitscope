'use client';

import { motion } from 'framer-motion';
import { PrivacySectionHeaderProps } from '@/types/privacy';

import '../../styles/components/privacy/PrivacySectionHeader.scss';

const PrivacySectionHeader = ({
  id,
  badge,
  title,
  subtitle,
  variants,
}: PrivacySectionHeaderProps) => {
  return (
    <motion.header variants={variants} className='privacy-section-header'>
      <motion.span
        variants={variants}
        className='privacy-section-header--badge'
      >
        {badge}
      </motion.span>

      <motion.h2
        variants={variants}
        id={id}
        className='privacy-section-header--title'
      >
        {title}
      </motion.h2>

      <motion.p
        variants={variants}
        className='privacy-section-header--subtitle'
      >
        {subtitle}
      </motion.p>
    </motion.header>
  );
};

export default PrivacySectionHeader;
