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
  index,
  className,
  style,
}: ArchitectureCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
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
