'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { CTAMetricProps } from '@/types/about/cta/cta.metric.type';
import '../../../styles/components/about/cta/CTAMetric.scss';

const CTAMetric = ({
  icon: Icon,
  label,
  index,
  className,
  style,
}: CTAMetricProps) => {
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
      className={clsx('cta-metric', className)}
      style={style}
    >
      <Icon
        size={16}
        strokeWidth={1.8}
        className='cta-metric__icon'
        role='img'
        aria-hidden='true'
        focusable='false'
      />

      <span className='cta-metric__label'>{label}</span>
    </motion.div>
  );
};

export default CTAMetric;
