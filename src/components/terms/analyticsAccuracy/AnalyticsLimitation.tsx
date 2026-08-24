'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { AnalyticsLimitationProps } from '@/types/terms/analyticsAccuracy/analytics.limitation.type';
import '../../../styles/components/terms/analyticsAccuracy/AnalyticsLimitation.scss';

const AnalyticsLimitation = ({
  title,
  description,
  icon: Icon,
  accentColor,
  index,
  className,
  style,
}: AnalyticsLimitationProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={clsx('analytics-limitation', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='analytics-limitation__icon'>
        <Icon
          size={18}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='analytics-limitation__content'>
        <h4 className='analytics-limitation__content--title'>{title}</h4>

        <p className='analytics-limitation__content--description'>
          {description}
        </p>
      </div>
    </motion.article>
  );
};

export default AnalyticsLimitation;
