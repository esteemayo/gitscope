'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

import { FeatureCardProps } from '@/types/about/features/feature.card.type';
import '../../../styles/components/about/features/FeatureCard.scss';

const FeatureCard = ({
  feature: { icon, title, description, accentColor, preview, previewHeight },
  variants,
}: FeatureCardProps) => {
  return (
    <motion.article
      variants={variants}
      className='feature-card'
      style={
        {
          '--accent-color': accentColor,
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

        <ArrowUpRight size={18} />
      </div>
    </motion.article>
  );
};

export default FeatureCard;
