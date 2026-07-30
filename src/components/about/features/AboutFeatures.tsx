'use client';

import { motion } from 'framer-motion';

import FeaturedFeature from './FeaturedFeature';
import FeatureCard from './FeatureCard';
import AboutSectionHeader from '../AboutSectionHeader';

import { containerVariants } from '@/animations/page';
import { AboutFeaturesProps } from '@/types/about/features/about.features.type';

import '../../../styles/components/about/features/AboutFeatures.scss';

const AboutFeatures = ({
  badge,
  title,
  description,
  features,
}: AboutFeaturesProps) => {
  const featuredFeature = features.find((feature) => feature.isFeatured);

  const featuredCards = features.filter((feature) => !feature.isFeatured);

  return (
    <motion.section
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.25 }}
      className='about-features'
      aria-labelledby='about-features-title'
    >
      <div className='about-features__container'>
        <div className='about-features__wrapper'>
          <AboutSectionHeader
            id='about-features-title'
            badge={badge}
            title={title}
            description={description}
            variants={containerVariants}
          />

          {featuredFeature && (
            <FeaturedFeature
              feature={featuredFeature}
              variants={containerVariants}
            />
          )}

          <div className='about-features__grid'>
            {featuredCards.map((feature) => (
              <FeatureCard
                key={feature.id}
                feature={feature}
                variants={containerVariants}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutFeatures;
