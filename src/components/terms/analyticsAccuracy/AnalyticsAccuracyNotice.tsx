'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { AnalyticsAccuracyNoticeProps } from '@/types/terms/analyticsAccuracy/analytics.accuracy.notice.type';

import '../../../styles/components/terms/analyticsAccuracy/AnalyticsAccuracyNotice.scss';

const AnalyticsAccuracyNotice = ({
  title,
  description,
  icon: Icon,
  accentColor,
  className,
  style,
}: AnalyticsAccuracyNoticeProps) => {
  return (
    <motion.aside
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={clsx('analytics-accuracy-notice', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
      aria-label='Analytics accuracy notice'
    >
      <div className='analytics-accuracy-notice__icon'>
        <Icon
          size={20}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='analytics-accuracy-notice__content'>
        <span className='analytics-accuracy-notice__content--label'>
          Important context
        </span>

        <h3 className='analytics-accuracy-notice__content--title'>{title}</h3>

        <p className='analytics-accuracy-notice__content--description'>
          {description}
        </p>
      </div>
    </motion.aside>
  );
};

export default AnalyticsAccuracyNotice;
