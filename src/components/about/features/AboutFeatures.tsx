'use client';

import { motion, Variants } from 'framer-motion';

import FeatureCard from './FeatureCard';
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
  const featuredFeature = features.find((feature) => feature.isFeatured);

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

          {featuredFeature && (
            <motion.article
              variants={itemVariants}
              className='about-features__feature-card'
              style={
                {
                  '--accent-color': featuredFeature.accentColor,
                } as React.CSSProperties
              }
            >
              <div className='about-features__content'>
                <div className='about-features__icon'>
                  {featuredFeature.icon}
                </div>

                <h3 className='about-features__title'>
                  {featuredFeature.title}
                </h3>

                <p className='about-features__description'>
                  {featuredFeature.description}
                </p>

                <ul className='about-features__capabilities'>
                  <li className='about-features__capabilities--item'>
                    Repository metrics
                  </li>

                  <li className='about-features__capabilities--item'>
                    Contributor insights
                  </li>

                  <li className='about-features__capabilities--item'>
                    Language analytics
                  </li>

                  <li className='about-features__capabilities--item'>
                    Interactive dashboards
                  </li>
                </ul>

                <div className='about-features__live-analytics'>
                  <span className='about-features__live-dot' />
                  Live Analytics
                </div>
              </div>

              <div className='about-features__preview'>
                <div className='about-features__window'>
                  <div className='about-features__preview-header'>
                    <div className='about-features__window-actions'>
                      {[...Array(3)].map((_, index) => (
                        <span key={index} />
                      ))}
                    </div>

                    <span className='about-features__preview-title'>
                      Repository analytics
                    </span>
                  </div>

                  <div className='about-features__preview-body'>
                    {featuredFeature.preview}
                  </div>
                </div>
              </div>
            </motion.article>
          )}

          <motion.div
            variants={containerVariants}
            className='about-features__grid'
          >
            {featuredCards.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutFeatures;
