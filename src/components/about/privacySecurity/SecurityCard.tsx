'use client';

import { Check } from 'lucide-react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import { SecurityCardProps } from '@/types/about/privacySecurity/security.card.type';
import '../../../styles/components/about/privacySecurity/SecurityCard.scss';

const SecurityCard = ({
  icon: Icon,
  badge,
  title,
  description,
  accentColor,
  highlights,
  index,
  className,
  style,
}: SecurityCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={clsx('security-card', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='security-card__badge'>{badge}</div>

      <header className='security-card__header'>
        <div className='security-card__icon'>
          <Icon
            size={28}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />
        </div>

        <div className='security-card__content'>
          <h3 className='security-card__content--title'>{title}</h3>

          <p className='security-card__content--description'>{description}</p>
        </div>
      </header>

      <div className='security-card__divider' />

      <ul className='security-card__list'>
        {highlights.map((highlight) => (
          <li key={highlight} className='security-card__item'>
            <Check
              size={14}
              strokeWidth={1.8}
              className='security-card__item--check'
              role='img'
              aria-hidden='true'
              focusable='false'
            />

            <span className='security-card__item--highlight'>{highlight}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
};

export default SecurityCard;
