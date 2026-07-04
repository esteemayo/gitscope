'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

import GitHubLogoIcon from '../icons/GitHubLogoIcon';
import { AboutHeroProps } from '@/types/about/about.hero.type';

import '../../styles/components/about/AboutHero.scss';

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
  stats,
  analytics,
}: AboutHeroProps) => {
  return (
    <header className='about-hero'>
      <div className='about-hero__container'>
        <div className='about-hero__blur-one' />
        <div className='about-hero__blur-two' />

        <div className='about-hero__grid' />

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

              <motion.div variants={itemVariants} className='about-hero__stats'>
                {stats.map((stat) => {
                  const { id, label, value } = stat;

                  return (
                    <div key={id} className='about-hero__stat'>
                      <span className='about-hero__stat--value'>{value}</span>
                      <small className='about-hero__stat--label'>{label}</small>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className='about-hero__preview'>
              <div className='about-hero__preview-header'>
                <div className='about-hero__window-buttons'>
                  <span />
                  <span />
                  <span />
                </div>

                <p>GitScope Analytics</p>
              </div>

              <div className='about-hero__analytics'>
                {analytics.map((analytic) => {
                  const { id, icon: Icon, title, value, trend } = analytic;

                  return (
                    <div key={id} className='about-hero__card'>
                      <div className='about-hero__icon'>
                        <Icon size={22} />
                      </div>

                      <div className='about-hero__group'>
                        <h4 className='about-hero__group--title'>{title}</h4>

                        <strong className='about-hero__group--value'>
                          {value}
                        </strong>

                        <small className='about-hero__group--trend'>
                          {trend}
                        </small>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default AboutHero;
