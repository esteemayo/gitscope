'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';
import { CheckCircle, ShieldCheck } from 'lucide-react';

import { SecurityOutcomeProps } from '@/types/privacy/dataStorageSecurity/security.outcome.type';
import '../../../styles/components/privacy/dataStorage/SecurityOutcome.scss';

const SecurityOutcome = ({
  badge,
  title,
  description,
  accentColor,
  items,
  className,
  style,
}: SecurityOutcomeProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={clsx('security-outcome', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='security-outcome__icon'>
        <ShieldCheck
          size={34}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='security-outcome__content'>
        <span className='security-outcome__content--badge'>{badge}</span>

        <h3 className='security-outcome__content--title'>{title}</h3>

        <p className='security-outcome__content--description'>{description}</p>
      </div>

      <ul className='security-outcome__list'>
        {items.map((item) => {
          const { id, label } = item;

          return (
            <li key={id} className='security-outcome__item'>
              <CheckCircle
                size={18}
                className='security-outcome__item--icon'
                role='img'
                aria-hidden='true'
                focusable='false'
              />

              <span className='security-outcome__item--label'>{label}</span>
            </li>
          );
        })}
      </ul>
    </motion.article>
  );
};

export default SecurityOutcome;
