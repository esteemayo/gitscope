'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

import HeroPreview from './HeroPreview';

import GitHubLogoIcon from '../../icons/GitHubLogoIcon';
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
            <div className='about-hero__content'>
              <motion.div variants={itemVariants} className='about-hero__badge'>
                <Sparkles size={16} />
                {badge}
              </motion.div>

              <motion.h1 variants={itemVariants} className='about-hero__title'>
                {title}
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className='about-hero__description'
              >
                {description}
              </motion.p>

              <motion.div
                variants={itemVariants}
                className='about-hero__actions'
              >
                <Link
                  href={primaryButtonHref}
                  className='about-hero__actions--btn-primary'
                >
                  {primaryButtonLabel}

                  <ArrowRight size={18} />
                </Link>

                <a
                  href={secondaryButtonHref}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='about-hero__actions--btn-secondary'
                >
                  <GitHubLogoIcon />

                  {secondaryButtonLabel}
                </a>
              </motion.div>
            </div>

            <HeroPreview analytics={analytics} itemVariants={itemVariants} />
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default AboutHero;
