'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { ValueCardProps } from '@/types/about/whyGitScope/value.card.type';
import '../../../styles/components/about/whyGitScope/ValueCard.scss';

const ValueCard = ({
  icon: Icon,
  title,
  description,
  accentColor,
  variants,
  className,
  style,
}: ValueCardProps) => {
  return (
    <motion.article
      variants={variants}
      className={clsx('value-card', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='value-card__icon'>
        <Icon
          size={28}
          strokeWidth={2}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='value-card__content'>
        <h3 className='value-card__content--title'>{title}</h3>

        <p className='value-card__content--description'>{description}</p>
      </div>

      <div className='value-card__footer'>
        <span />
      </div>
    </motion.article>
  );
};

export default ValueCard;
