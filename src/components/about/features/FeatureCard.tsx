'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

import { FeatureCardProps } from '@/types/about/features/feature.card.type';
import '../../../styles/components/about/features/FeatureCard.scss';

const FeatureCard = ({ feature }: FeatureCardProps) => {
  return (
    <article
      className='feature-card'
      style={
        {
          '--accent-color': feature.accentColor,
        } as React.CSSProperties
      }
    >
      <div className='feature-card__icon'>{feature.icon}</div>

      <div className='feature-card__content'>
        <h3 className='feature-card__title'>{feature.title}</h3>

        <p className='feature-card__description'>{feature.description}</p>
      </div>

      <div className='feature-card__preview'>{feature.preview}</div>

      <div className='feature-card__footer'>
        <span className='feature-card__footer--label'>Explore feature</span>

        <ArrowUpRight size={18} />
      </div>
    </article>
  );
};

export default FeatureCard;
