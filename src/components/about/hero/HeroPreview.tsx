'use client';

import { motion } from 'framer-motion';

import HeroCard from './HeroCard';
import { HeroPreviewProps } from '@/types/about/hero/hero.preview.type';

import '../../../styles/components/about/hero/HeroPreview.scss';

const HeroPreview = ({ analytics, itemVariants }: HeroPreviewProps) => {
  return (
    <motion.div variants={itemVariants} className='hero-preview'>
      <div className='hero-preview__header'>
        <div className='hero-preview__window-buttons'>
          <span />
          <span />
          <span />
        </div>

        <p>GitScope Analytics</p>
      </div>

      <div className='hero-preview__analytics'>
        {analytics.map((analytic) => (
          <HeroCard key={analytic.id} {...analytic} />
        ))}
      </div>
    </motion.div>
  );
};

export default HeroPreview;
