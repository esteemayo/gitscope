'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import FeaturedFeature from './FeaturedFeature';
import FeatureCard from './FeatureCard';
import SectionIntro from '@/components/ui/SectionIntro';

import { containerVariants } from '@/animations/page';
import { AboutFeaturesProps } from '@/types/about/features/about.features.type';

import '../../../styles/components/about/features/AboutFeatures.scss';

const AboutFeatures = ({
  badge,
  title,
  description,
  features,
  accentColor,
  className,
  style,
}: AboutFeaturesProps) => {
  const featuredFeature = features.find((feature) => feature.isFeatured);

  const featuredCards = features.filter((feature) => !feature.isFeatured);

  return (
    <motion.section
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className={clsx('about-features', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
      aria-labelledby='about-features-title'
    >
      <div className='about-features__container'>
        <div className='about-features__wrapper'>
          <SectionIntro
            id='about-features-title'
            badge={badge}
            title={title}
            description={description}
            accentColor={accentColor}
            variants={containerVariants}
          />

          {featuredFeature && <FeaturedFeature {...featuredFeature} />}

          <div className='about-features__grid'>
            {featuredCards.map((feature, index) => (
              <FeatureCard key={feature.id} {...feature} index={index} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutFeatures;
