'use client';

import { motion } from 'framer-motion';
import { AnalyticsLimitationsProps } from '@/types/terms/analyticsAccuracy/analytics.limitations.type';

import '../../../styles/components/terms/analyticsAccuracy/AnalyticsLimitations.scss';

const AnalyticsLimitations = ({ items }: AnalyticsLimitationsProps) => {
  return (
    <div className='analytics-limitations'>
      <div className='analytics-limitations__heading'>
        <span className='analytics-limitations__heading--label'>
          Known variables
        </span>

        <h3 className='analytics-limitations__heading--title'>
          What can affect accuracy?
        </h3>
      </div>

      <div className='analytics-limitations__list'>
        {items.map((item, index) => {
          const { id, title, description, icon: Icon, accentColor } = item;

          return (
            <motion.article
              key={id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className='analytics-limitations__item'
              style={
                {
                  '--accent-color': accentColor,
                } as React.CSSProperties
              }
            >
              <div className='analytics-limitations__item-icon'>
                <Icon
                  size={18}
                  strokeWidth={1.8}
                  role='img'
                  aria-hidden='true'
                  focusable='false'
                />
              </div>

              <div className='analytics-limitations__item-content'>
                <h4 className='analytics-limitations__item-title'>{title}</h4>

                <p className='analytics-limitations__item-description'>
                  {description}
                </p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
};

export default AnalyticsLimitations;
