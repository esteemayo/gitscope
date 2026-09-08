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
  index,
  className,
  style,
}: ValueCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
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
