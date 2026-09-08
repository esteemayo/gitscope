'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { StackCardProps } from '@/types/about/technologyStack/stack.card.type';
import '../../../styles/components/about/technologyStack/StackCard.scss';

const StackCard = ({
  icon: Icon,
  title,
  description,
  accentColor,
  technologies,
  index,
  className,
  style,
}: StackCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={clsx('stack-card', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <header className='header stack-card__header'>
        <div className='stack-card__icon'>
          <Icon
            size={28}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />
        </div>

        <div className='stack-card__content'>
          <h3 className='stack-card__content--title'>{title}</h3>

          <p className='stack-card__content--description'>{description}</p>
        </div>
      </header>

      <div className='stack-card__divider' />

      <div className='stack-card__chips'>
        {technologies.map((technology) => (
          <span key={technology} className='stack-card__chip'>
            {technology}
          </span>
        ))}
      </div>
    </motion.article>
  );
};

export default StackCard;
