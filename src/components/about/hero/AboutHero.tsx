'use client';

import { motion, Variants } from 'framer-motion';

import HeroContent from './HeroContent';
import HeroPreview from './HeroPreview';

import { AboutHeroProps } from '@/types/about/hero/about.hero.type';
import '../../../styles/components/about/hero/AboutHero.scss';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
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
  },
};

const AboutHero = ({
  badge = 'About GitScope',
  title,
  description,
  primaryButtonLabel,
  secondaryButtonLabel,
  primaryButtonHref,
  secondaryButtonHref,
  analytics,
}: AboutHeroProps) => {
  return (
    <header className='about-hero'>
      <div className='about-hero__container'>
        <div className='about-hero__blur-one' />
        <div className='about-hero__blur-two' />

        <div className='about-hero__box'>
          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            className='about-hero__wrapper'
          >
            <HeroContent
              badge={badge}
              title={title}
              description={description}
              primaryButtonLabel={primaryButtonLabel}
              secondaryButtonLabel={secondaryButtonLabel}
              primaryButtonHref={primaryButtonHref}
              secondaryButtonHref={secondaryButtonHref}
              itemVariants={itemVariants}
            />

            <HeroPreview analytics={analytics} itemVariants={itemVariants} />
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default AboutHero;
