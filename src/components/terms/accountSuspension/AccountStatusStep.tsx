'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { AccountStatusStepProps } from '@/types/terms/accountSuspension/account.status.step.type';
import '../../../styles/components/terms/accountSuspension/AccountStatusStep.scss';

const AccountStatusStep = ({
  title,
  description,
  icon: Icon,
  accentColor,
  index,
  className,
  style,
}: AccountStatusStepProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.35,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={clsx('account-status-step', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='account-status-step__number'>
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className='account-status-step__icon'>
        <Icon
          size={18}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='account-status-step__content'>
        <h4 className='account-status-step__content--title'>{title}</h4>

        <p className='account-status-step__content--description'>
          {description}
        </p>
      </div>
    </motion.article>
  );
};

export default AccountStatusStep;
