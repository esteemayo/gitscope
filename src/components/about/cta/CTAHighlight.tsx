'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { CTAHighlightProps } from '@/types/about/cta/cta.highlight.type';
import '../../../styles/components/about/cta/CTAHighlight.scss';

const CTAHighlight = ({
  icon: Icon,
  label,
  index,
  className,
  style,
}: CTAHighlightProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.3,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={clsx('cta-highlight', className)}
      style={style}
    >
      <Icon
        size={16}
        strokeWidth={1.8}
        className='cta-highlight__icon'
        role='img'
        aria-hidden='true'
        focusable='false'
      />

      <span className='cta-highlight__item'>{label}</span>
    </motion.div>
  );
};

export default CTAHighlight;
