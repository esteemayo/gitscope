'use client';

import { motion, Variants } from 'framer-motion';

import FeatureHeader from './FeatureHeader';
import { AboutFeaturesProps } from '@/types/about/features/about.features.type';

import '../../../styles/components/about/features/AboutFeatures.scss';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

const AboutFeatures = ({
  badge,
  title,
  description,
  features,
}: AboutFeaturesProps) => {
  const featuredEvents = features.find((feature) => feature.isFeatured);

  const featuredCards = features.filter((feature) => !feature.isFeatured);

  return (
    <section className='about-features' aria-labelledby='about-features-title'>
      <div className='about-features__container'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.25 }}
          className='about-features__wrapper'
        >
          <FeatureHeader
            badge={badge}
            title={title}
            description={description}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutFeatures;
