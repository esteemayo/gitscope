'use client';

import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

import { SecurityCardProps } from '@/types/about/privacySecurity/security.card.type';
import '../../../styles/components/about/privacySecurity/SecurityCard.scss';

const SecurityCard = ({
  feature: { icon: Icon, badge, title, description, accentColor, highlights },
  variants,
}: SecurityCardProps) => {
  return (
    <motion.article
      variants={variants}
      className='security-card'
      style={
        {
          '--accent-color': accentColor,
        } as React.CSSProperties
      }
    >
      <div className='security-card__badge'>{badge}</div>

      <header className='security-card__header'>
        <div className='security-card__icon'>
          <Icon size={28} />
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
            <Check size={16} className='security-card__item--check' />

            <span className='security-card__item--highlight'>{highlight}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
};

export default SecurityCard;
