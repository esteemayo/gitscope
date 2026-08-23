'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { AnalyticsMethodologyItemProps } from '@/types/terms/analyticsAccuracy/analytics.methodology.item.type';
import '../../../styles/components/terms/analyticsAccuracy/AnalyticsMethodologyItem.scss';

const AnalyticsMethodologyItem = ({
  label,
  value,
  description,
  icon: Icon,
  accentColor,
  index,
  className,
  style,
}: AnalyticsMethodologyItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: index * 0.04,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={clsx('analytics-methodology-item', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='analytics-methodology-item__icon'>
        <Icon
          size={18}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='analytics-methodology-item__main'>
        <div className='analytics-methodology-item__heading'>
          <h4 className='analytics-methodology-item__label'>{label}</h4>

          <span className='analytics-methodology-item__value'>{value}</span>
        </div>

        <p className='analytics-methodology-item__description'>{description}</p>
      </div>
    </motion.div>
  );
};

export default AnalyticsMethodologyItem;
