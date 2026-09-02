'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { ChangeLifecycleStepProps } from '@/types/terms/changesToTerms/changes.lifecycle.step.type';
import '../../../styles/components/terms/changesToTerms/ChangeLifecycleStep.scss';

const ChangeLifecycleStep = ({
  title,
  description,
  icon: Icon,
  accentColor,
  index,
  isLast,
  className,
  style,
}: ChangeLifecycleStepProps) => {
  return (
    <div className='change-lifecycle-step-wrapper'>
      <motion.article
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.3,
          delay: index * 0.07,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={clsx('change-lifecycle-step', className)}
        style={
          {
            '--accent-color': accentColor,
            ...style,
          } as React.CSSProperties
        }
      >
        <div className='change-lifecycle-step__top'>
          <span className='change-lifecycle-step__number'>
            {String(index + 1).padStart(2, '0')}
          </span>

          <div className='change-lifecycle-step__icon'>
            <Icon
              size={18}
              strokeWidth={1.8}
              role='img'
              aria-hidden='true'
              focusable='false'
            />
          </div>
        </div>

        <div className='change-lifecycle-step__content'>
          <h4 className='change-lifecycle-step__content--title'>{title}</h4>

          <p className='change-lifecycle-step__content--description'>
            {description}
          </p>
        </div>
      </motion.article>

      {!isLast && (
        <div className='change-lifecycle-step__connector' aria-hidden='true' />
      )}
    </div>
  );
};

export default ChangeLifecycleStep;
