'use client';

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
}: HeroCardProps) => {
  return (
    <motion.article
      variants={variants}
      className='hero-card'
      style={
        {
          '--accent-color': accentColor,
        } as React.CSSProperties
      }
    >
      <div className='hero-card__icon'>
        <Icon size={28} />
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
