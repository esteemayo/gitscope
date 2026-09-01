'use client';

import { Check } from 'lucide-react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import { EnforcementNoticeProps } from '@/types/terms/accountSuspension/enforcement.notice.type';
import '../../../styles/components/terms/accountSuspension/EnforcementNotice.scss';

const EnforcementNotice = ({
  title,
  description,
  points,
  icon: Icon,
  accentColor,
  className,
  style,
}: EnforcementNoticeProps) => {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={clsx('enforcement-notice', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
      aria-label={title}
    >
      <div className='enforcement-notice__side'>
        <div className='enforcement-notice__side--icon'>
          <Icon
            size={22}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />
        </div>

        <span className='enforcement-notice__side--label'>
          Enforcement notice
        </span>
      </div>

      <div className='enforcement-notice__content'>
        <h3 className='enforcement-notice__content--title'>{title}</h3>

        <p className='enforcement-notice__content--description'>
          {description}
        </p>

        <ul className='enforcement-notice__list'>
          {points.map((point) => (
            <li key={point} className='enforcement-notice__item'>
              <span className='enforcement-notice__item--icon'>
                <Check
                  size={12}
                  strokeWidth={1.8}
                  role='img'
                  aria-hidden='true'
                  focusable='false'
                />
              </span>

              <span className='enforcement-notice__item--point'>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.aside>
  );
};

export default EnforcementNotice;
