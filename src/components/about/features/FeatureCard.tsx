'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';
import { ArrowUpRight } from 'lucide-react';

import { FeatureCardProps } from '@/types/about/features/feature.card.type';
import '../../../styles/components/about/features/FeatureCard.scss';

const FeatureCard = ({
  icon,
  title,
  description,
  accentColor,
  preview,
  previewHeight,
  index,
  className,
  style,
}: FeatureCardProps) => {
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
      className={clsx('feature-card', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='feature-card__icon'>{icon}</div>

      <div className='feature-card__content'>
        <h3 className='feature-card__title'>{title}</h3>

        <p className='feature-card__description'>{description}</p>
      </div>

      <div
        className={
          previewHeight
            ? `feature-card__preview ${previewHeight}`
            : 'feature-card__preview medium'
        }
      >
        {preview}
      </div>

      <div className='feature-card__footer'>
        <span className='feature-card__footer--label'>Explore feature</span>

        <ArrowUpRight
          size={18}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>
    </motion.article>
  );
};

export default FeatureCard;
