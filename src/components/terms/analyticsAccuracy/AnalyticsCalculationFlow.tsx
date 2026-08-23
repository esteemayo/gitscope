'use client';

import { motion } from 'framer-motion';
import { AnalyticsCalculationFlowProps } from '@/types/terms/analyticsAccuracy/analytics.calculation.flow.type';

import '../../../styles/components/terms/analyticsAccuracy/AnalyticsCalculationFlow.scss';

const AnalyticsCalculationFlow = ({ steps }: AnalyticsCalculationFlowProps) => {
  return (
    <div
      className='analytics-calculation-flow'
      aria-label='GitScope analytics calculation process'
    >
      {steps.map((step, index) => {
        const { id, title, description, icon: Icon, accentColor } = step;

        return (
          <div key={id} className='analytics-calculation-flow__wrapper'>
            <motion.article
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className='analytics-calculation-flow__step'
              style={
                {
                  '--accent-color': accentColor,
                } as React.CSSProperties
              }
            >
              <div className='analytics-calculation-flow__top'>
                <span className='analytics-calculation-flow__number'>
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className='analytics-calculation-flow__icon'>
                  <Icon
                    size={18}
                    strokeWidth={1.8}
                    role='img'
                    aria-hidden='true'
                    focusable='false'
                  />
                </div>
              </div>

              <div className='analytics-calculation-flow__content'>
                <h4 className='analytics-calculation-flow__content--title'>
                  {title}
                </h4>

                <p className='analytics-calculation-flow__content--description'>
                  {description}
                </p>
              </div>
            </motion.article>

            {index < steps.length - 1 && (
              <div
                className='analytics-calculation-flow__connector'
                aria-hidden='false'
              >
                <span />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AnalyticsCalculationFlow;
