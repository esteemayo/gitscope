'use client';

import { motion } from 'framer-motion';

import { PrivacyHeroProps } from '@/types/privacy/privacy.hero.type';
import '../../styles/components/privacy/PrivacyHero.scss';
import { ArrowRight, FileText, ShieldCheck } from 'lucide-react';

const PrivacyHero = ({
  badge,
  title,
  subtitle,
  lastUpdated,
  version = 'v1.0',
  summaryLink,
  policyLink,
  stats,
}: PrivacyHeroProps) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='privacy-hero'
      aria-labelledby='privacy-hero-title'
    >
      <div className='privacy-hero__background' aria-hidden='true'>
        <div className='privacy-hero__noise' />

        <div className='privacy-hero__grid' />

        <motion.div
          animate={{ x: [0, 25, 0], y: [0, -20, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className='privacy-hero__glow privacy-hero__glow--primary'
        />

        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 30, 0], scale: [1, 1.12, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className='privacy-hero__glow privacy-hero__glow--secondary'
        />

        <motion.div
          animate={{ x: [0, 18, 0], y: [0, 18, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className='privacy-hero__glow privacy-hero__glow--tertiary'
        />
      </div>

      <div className='privacy-hero__container'>
        <div className='privacy-hero__wrapper'>
          <div className='privacy-hero__content'>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className='privacy-hero__badge'
            >
              <ShieldCheck
                size={18}
                className='privacy-hero__badge--icon'
                aria-hidden='true'
                focusable='false'
              />

              <span className='privacy-hero__badge--label'>{badge}</span>
            </motion.div>

            <motion.header
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className='privacy-hero__header'
            >
              <h1
                id='privacy-hero-title'
                className='privacy-hero__header--title'
              >
                {title}
              </h1>

              <p className='privacy-hero__header--subtitle'>{subtitle}</p>

              
            </motion.header>

            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className='privacy-hero__actions'
              aria-label='Privacy policy actions'
            >
              <a
                href={summaryLink}
                className='privacy-hero__button privacy-hero__button--primary'
              >
                <span>Read summary</span>

                <ArrowRight size={18} aria-hidden='true' focusable='false' />
              </a>

              <a
                href={policyLink}
                className='privacy-hero__button privacy-hero__button--secondary'
              >
                <FileText size={18} aria-hidden='true' focusable='false' />

                <span>View full policy</span>
              </a>
            </motion.nav>

            <motion.ul
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className='privacy-hero__stats'
            >
              {stats.map((stat) => {
                const { id, value, label } = stat;

                return (
                  <li key={id} className='privacy-hero__stat'>
                    <span className='privacy-hero__stat--value'>{value}</span>

                    <span className='privacy-hero__stat--label'>{label}</span>
                  </li>
                );
              })}
            </motion.ul>
          </div>

          <aside
            className='privacy-hero__aside'
            aria-label='Privacy policy information'
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35 }}
              className='privacy-hero__illustration'
              aria-hidden='true'
            >
              <div className='privacy-hero__shield'>
                <ShieldCheck size={80} aria-hidden='true' focusable='false' />
              </div>

              <span className='privacy-hero__ring privacy-hero__ring--one' />

              <span className='privacy-hero__ring privacy-hero__ring--two' />

              <span className='privacy-hero__ring privacy-hero__ring--three' />
            </motion.div>

            <motion.article
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className='privacy-hero__card'
            >
              <div className='privacy-hero__card-header'>
                <div className='privacy-hero__card-icon'>
                  <ShieldCheck size={22} aria-hidden='true' focusable='false' />
                </div>

                <div className='privacy-hero__card-content'>
                  <h2 className='privacy-hero__card-title'>
                    Your Privacy Matters
                  </h2>

                  <p className='privacy-hero__card-description'>
                    GitScope only requests the minimum GitHub permissions
                    required to generate analytics.
                  </p>
                </div>
              </div>

              <div className='privacy-hero__divider' />

              <dl className='privacy-hero__meta'>
                <div className='privacy-hero__meta-item'>
                  <dt className='privacy-hero__meta-item--label'>
                    Last updated
                  </dt>

                  <dd className='privacy-hero__meta-item--value'>
                    {lastUpdated}
                  </dd>
                </div>

                <div className='privacy-hero__meta-item'>
                  <dt className='privacy-hero__meta-item--label'>
                    Policy version
                  </dt>

                  <dd className='privacy-hero__meta-item--value'>{version}</dd>
                </div>

                <div className='privacy-hero__meta-item'>
                  <dt className='privacy-hero__meta-item--label'>
                    GitHub access
                  </dt>

                  <dd className='privacy-hero__meta-item--value'>Read only</dd>
                </div>

                <div className='privacy-hero__meta-item'>
                  <dt className='privacy-hero__meta-item--label'>Data sales</dt>

                  <dd className='privacy-hero__meta-item--value'>Never</dd>
                </div>
              </dl>
            </motion.article>
          </aside>
        </div>
      </div>
    </motion.section>
  );
};

export default PrivacyHero;
