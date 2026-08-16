'use client';

import { motion } from 'framer-motion';

import TermsHeroPreview from './TermsHeroPreview';
import { TermsHeroProps } from '@/types/terms/termsHero/terms.hero.type';

import '../../../styles/components/terms/hero/TermsHero.scss';

const TermsHero = ({
  eyebrow,
  title,
  description,
  actions,
  trustBadges,
  preview,
}: TermsHeroProps) => {
  return (
    <section className='terms-hero' aria-labelledby='terms-hero-title'>
      <div className='terms-hero__container'>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='terms-hero__content'
        >
          <span className='terms-hero__eyebrow'>{eyebrow}</span>

          <h1 id='terms-hero-title' className='terms-hero__title'>
            {title}
          </h1>

          <p className='terms-hero__description'>{description}</p>

          <div className='terms-hero__actions'>
            {actions.map((action) => {
              const { label, href, variant, icon: Icon } = action;

              return (
                <a
                  key={label}
                  href={href}
                  className={`terms-hero__button terms-hero__button--${variant}`}
                >
                  <span className='terms-hero__button--label'>{label}</span>

                  {Icon && (
                    <Icon
                      size={16}
                      strokeWidth={1.8}
                      className='terms-hero__button--icon'
                      role='img'
                      aria-hidden='true'
                      focusable='false'
                    />
                  )}
                </a>
              );
            })}
          </div>

          <ul className='terms-hero__badges' aria-label='Trust Indicators'>
            {trustBadges.map((badge) => {
              const { label, icon: Icon } = badge;

              return (
                <li key={label} className='terms-hero__badge'>
                  <Icon
                    size={25}
                    strokeWidth={1.8}
                    className='terms-hero__badge--icon'
                    role='img'
                    aria-hidden='true'
                    focusable='false'
                  />

                  <span className='terms-hero__badge--label'>{label}</span>
                </li>
              );
            })}
          </ul>
        </motion.div>

        <div className='terms-hero__preview'>
          <TermsHeroPreview {...preview} />
        </div>
      </div>
    </section>
  );
};

export default TermsHero;
