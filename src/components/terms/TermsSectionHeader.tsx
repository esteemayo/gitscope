'use client';

import { motion } from 'framer-motion';
import { TermsSectionHeaderProps } from '@/types/terms';

import '../../styles/components/terms/TermsSectionHeader.scss';

const TermsSectionHeader = ({
  id,
  badge,
  title,
  description,
  icon: Icon,
  accentColor,
  align = 'center',
  variants,
}: TermsSectionHeaderProps) => {
  return (
    <motion.header
      variants={variants}
      className={`terms-section-header terms-section-header--${align}`}
      style={
        {
          '--accent-color': accentColor,
        } as React.CSSProperties
      }
    >
      <motion.div variants={variants} className='terms-section-header__badge'>
        {Icon && (
          <Icon
            size={14}
            strokeWidth={1.8}
            className='terms-section-header__badge--icon'
            role='img'
            aria-hidden='true'
            focusable='true'
          />
        )}

        <span className='terms-section-header__badge--text'>{badge}</span>
      </motion.div>

      <motion.h2
        variants={variants}
        id={id}
        className='terms-section-header__title'
      >
        {title}
      </motion.h2>

      <motion.p
        variants={variants}
        className='terms-section-header__description'
      >
        {description}
      </motion.p>
    </motion.header>
  );
};

export default TermsSectionHeader;
