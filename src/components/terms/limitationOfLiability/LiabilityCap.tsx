'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { LiabilityCapProps } from '@/types/terms/limitationOfLiability/liability.cap.type';
import '../../../styles/components/terms/limitationOfLiability/LiabilityCap.scss';

const LiabilityCap = ({
  label,
  title,
  description,
  icon: Icon,
  accentColor,
  className,
  style,
}: LiabilityCapProps) => {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className={clsx('liability-cap', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
      aria-label={title}
    >
      <div className='liability-cap__icon'>
        <Icon size={22} strokeWidth={1.7} aria-hidden='true' />
      </div>

      <div className='liability-cap__content'>
        <span>{label}</span>

        <h3>{title}</h3>

        <p>{description}</p>
      </div>

      <div className='liability-cap__marker' aria-hidden='true'>
        MAX
      </div>
    </motion.aside>
  );
};

export default LiabilityCap;
