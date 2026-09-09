'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { HeroCardProps } from '@/types/about/hero/hero.card.type';
import '../../../styles/components/about/hero/HeroCard.scss';

const HeroCard = ({
  icon: Icon,
  title,
  value,
  trend,
  accentColor,
  variants,
  className,
  style,
}: HeroCardProps) => {
  return (
    <motion.article
      variants={variants}
      className={clsx('hero-card', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='hero-card__icon'>
        <Icon
          size={28}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='hero-card__group'>
        <h4 className='hero-card__group--title'>{title}</h4>

        <strong className='hero-card__group--value'>{value}</strong>

        <small className='hero-card__group--trend'>{trend}</small>
      </div>
    </motion.article>
  );
};

export default HeroCard;
