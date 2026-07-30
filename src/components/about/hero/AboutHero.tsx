'use client';

import { motion } from 'framer-motion';

import HeroContent from './HeroContent';
import HeroPreview from './HeroPreview';

import { containerVariants } from '@/animations/page';
import { AboutHeroProps } from '@/types/about/hero/about.hero.type';

import '../../../styles/components/about/hero/AboutHero.scss';

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
    <motion.header
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.25 }}
      className='about-hero'
    >
      <div className='about-hero__container'>
        <div className='about-hero__blur-one' />
        <div className='about-hero__blur-two' />

        <div className='about-hero__box'>
          <motion.div
            variants={containerVariants}
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
              variants={containerVariants}
            />

            <HeroPreview analytics={analytics} variants={containerVariants} />
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default AboutHero;
