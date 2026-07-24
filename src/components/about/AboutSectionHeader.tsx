'use client';

import { motion } from 'framer-motion';
import { AboutSectionHeaderProps } from '@/types/about/about.section.header.type';

import '../../styles/components/about/AboutSectionHeader.scss';

const AboutSectionHeader = ({
  id,
  badge,
  title,
  description,
  centered = true,
  variants,
}: AboutSectionHeaderProps) => {
  return (
    <motion.header
      variants={variants}
      className={
        centered ? 'about-section-header middle' : 'about-section-header'
      }
    >
      <motion.span
        variants={variants}
        className={
          centered
            ? 'about-section-header__badge middle'
            : 'about-section-header__badge'
        }
      >
        {badge}
      </motion.span>

      <motion.h2
        variants={variants}
        id={id}
        className='about-section-header__title'
      >
        {title}
      </motion.h2>

      <motion.p
        variants={variants}
        className='about-section-header__description'
      >
        {description}
      </motion.p>
    </motion.header>
  );
};

export default AboutSectionHeader;
