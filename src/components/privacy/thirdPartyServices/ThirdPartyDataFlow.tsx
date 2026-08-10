'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { ThirdPartyDataFlowProps } from '@/types/privacy/thirdPartyServices/third.party.data.flow.type';
import '../../../styles/components/privacy/thirdPartyServices/ThirdPartyDataFlow.scss';

const ThirdPartyDataFlow = ({
  badge,
  title,
  description,
  steps,
  className,
  style,
}: ThirdPartyDataFlowProps) => {
  return (
    <section className={clsx('third-party-data-flow', className)} style={style}>
      <header className='third-party-data-flow__header'>
        <span className='third-party-data-flow__header--badge'>{badge}</span>

        <h3 className='third-party-data-flow__header--title'>{title}</h3>

        <p className='third-party-data-flow__header--description'>
          {description}
        </p>
      </header>

      <div className='third-party-data-flow__steps'>
        {steps.map((step, index) => {
          const { id, label, description, icon: Icon, accentColor } = step;

          const isLast = index === steps.length - 1;

          return (
            <div key={id} className='third-party-data-flow__step-wrapper'>
              <motion.article
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.35 }}
                className='third-party-data-flow__step'
                style={
                  {
                    '--accent-color': accentColor,
                  } as React.CSSProperties
                }
              >
                <div className='third-party-data-flow__icon'>
                  <Icon
                    size={22}
                    role='img'
                    aria-hidden='true'
                    focusable='false'
                  />
                </div>

                <div className='third-party-data-flow__content'>
                  <span className='third-party-data-flow__content--number'>
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <h4 className='third-party-data-flow__content--label'>
                    {label}
                  </h4>

                  <p className='third-party-data-flow__content--description'>
                    {description}
                  </p>
                </div>
              </motion.article>

              {!isLast && (
                <div
                  className='third-party-data-flow__connector'
                  aria-hidden='true'
                />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ThirdPartyDataFlow;
