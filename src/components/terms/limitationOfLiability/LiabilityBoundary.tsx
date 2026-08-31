'use client';

import { motion } from 'framer-motion';
import { ShieldAlert } from 'lucide-react';

import { LiabilityBoundaryProps } from '@/types/terms/limitationOfLiability/liability.boundary.type';
import '../../../styles/components/terms/limitationOfLiability/LiabilityBoundary.scss';

const LiabilityBoundary = ({ title, description }: LiabilityBoundaryProps) => {
  return (
    <section
      className='liability-boundary'
      aria-labelledby='liability-boundary-title'
    >
      <div className='liability-boundary__signal'>
        <div className='liability-boundary__signal-ring'>
          <div className='liability-boundary__signal-icon'>
            <ShieldAlert
              size={24}
              strokeWidth={1.8}
              role='img'
              aria-hidden='true'
              focusable='false'
            />
          </div>
        </div>

        <span className='liability-boundary__signal-label'>Scope boundary</span>
      </div>

      <motion.div
        className='liability-boundary__content'
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className='liability-boundary__content--label'>
          Important limitation
        </span>

        <h3
          id='liability-boundary-title'
          className='liability-boundary__content--title'
        >
          {title}
        </h3>

        <p className='liability-boundary__content--description'>
          {description}
        </p>
      </motion.div>

      <div className='liability-boundary__scope'>
        <div className='liability-boundary__scope-item'>
          <span>GitScope provides</span>

          <strong>Analytics software</strong>
        </div>

        <div className='liability-boundary__divider' aria-hidden='true' />

        <div className='liability-boundary__scope-item'>
          <span>You remain responsible for</span>

          <strong>Decisions and actions</strong>
        </div>
      </div>
    </section>
  );
};

export default LiabilityBoundary;
