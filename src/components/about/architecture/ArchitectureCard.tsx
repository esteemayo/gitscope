'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { ArchitectureCardProps } from '@/types/about/architecture/architecture.card.type';
import '../../../styles/components/about/architecture/ArchitectureCard.scss';

const ArchitectureCard = ({
  icon: Icon,
  title,
  description,
  accentColor,
  layer,
  variants,
  className,
  style,
}: ArchitectureCardProps) => {
  return (
    <motion.article
      variants={variants}
      className={clsx('architecture-card', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <header className='architecture-card__header'>
        <div className='architecture-card__header--icon'>
          <Icon
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />
        </div>
      </header>

      <div className='architecture-card__content'>
        <h3 className='architecture-card__content--title'>{title}</h3>

        <p className='architecture-card__content--description'>{description}</p>
      </div>

      <footer className='architecture-card__footer'>
        <span className='architecture-card__footer--label'>{layer}</span>
      </footer>
    </motion.article>
  );
};

export default ArchitectureCard;
