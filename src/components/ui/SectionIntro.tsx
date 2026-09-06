'use client';

import { motion } from 'framer-motion';
import { SectionIntroProps } from '@/types/ui/section.intro.type';

import '../../styles/components/ui/SectionIntro.scss';

const SectionIntro = ({
  id,
  badge,
  title,
  description,
  icon: Icon,
  accentColor,
  align = 'center',
  variants,
}: SectionIntroProps) => {
  return (
    <motion.header
      variants={variants}
      className={`section-intro section-intro--${align}`}
      style={
        {
          '--accent-color': accentColor ?? 'var(--icon)',
        } as React.CSSProperties
      }
    >
      <motion.div variants={variants} className='section-intro__badge'>
        {Icon && (
          <Icon
            size={14}
            strokeWidth={1.8}
            className='section-intro__badge--icon'
            role='img'
            aria-hidden='true'
            focusable='true'
          />
        )}

        <span className='section-intro__badge--text'>{badge}</span>
      </motion.div>

      <motion.h2 variants={variants} id={id} className='section-intro__title'>
        {title}
      </motion.h2>

      <motion.p variants={variants} className='section-intro__description'>
        {description}
      </motion.p>
    </motion.header>
  );
};

export default SectionIntro;
