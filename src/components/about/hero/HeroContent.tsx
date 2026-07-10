'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

import GitHubLogoIcon from '../../icons/GitHubLogoIcon';
import { HeroContentProps } from '@/types/about/hero/hero.content.type';

import '../../../styles/components/about/hero/HeroContent.scss';

const HeroContent = ({
  badge,
  title,
  description,
  primaryButtonLabel,
  secondaryButtonLabel,
  primaryButtonHref,
  secondaryButtonHref,
  itemVariants,
}: HeroContentProps) => {
  return (
    <div className='hero-content'>
      <motion.div variants={itemVariants} className='hero-content__badge'>
        <Sparkles size={16} />
        {badge}
      </motion.div>

      <motion.h1 variants={itemVariants} className='hero-content__title'>
        {title}
      </motion.h1>

      <motion.p variants={itemVariants} className='hero-content__description'>
        {description}
      </motion.p>

      <motion.div variants={itemVariants} className='hero-content__actions'>
        <Link
          href={primaryButtonHref}
          className='hero-content__actions--btn-primary'
        >
          {primaryButtonLabel}

          <ArrowRight size={18} />
        </Link>

        <a
          href={secondaryButtonHref}
          target='_blank'
          rel='noopener noreferrer'
          className='hero-content__actions--btn-secondary'
        >
          <GitHubLogoIcon />

          {secondaryButtonLabel}
        </a>
      </motion.div>
    </div>
  );
};

export default HeroContent;
