'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';
import {
  Check,
  Circle,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

import { TermsHeroPreviewProps } from '@/types/terms/termsHero/terms.hero.preview.type';
import '../../../styles/components/terms/hero/TermsHeroPreview.scss';

const TermsHeroPreview = ({
  title,
  subtitle,
  status,
  metrics,
  permissions,
  className,
  style,
}: TermsHeroPreviewProps) => {
  const StatusIcon = status.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.96,
        y: 30,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
        delay: 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={clsx('terms-hero-preview', className)}
      style={style}
    >
      <div className='terms-hero-preview__window'>
        <header className='terms-hero-preview__header'>
          <div className='terms-hero-preview__window-controls'>
            {[...Array(3)].map((_, index) => (
              <span key={index} />
            ))}
          </div>

          <div className='terms-hero-preview__window-title'>
            <ShieldCheck
              size={14}
              strokeWidth={1.8}
              role='img'
              aria-hidden='true'
              focusable='false'
            />

            <span>gitscope.app</span>
          </div>

          <div className='terms-hero-preview__window-status'>
            <Circle
              size={12}
              fill='currentColor'
              strokeWidth={1.8}
              role='img'
              aria-hidden='true'
              focusable='false'
            />

            <span>Live</span>
          </div>
        </header>

        <div className='terms-hero-preview__body'>
          <div className='terms-hero-preview__intro'>
            <div className='terms-hero-preview__intro-icon'>
              <ShieldCheck
                size={22}
                strokeWidth={1.8}
                role='img'
                aria-hidden='true'
                focusable='false'
              />
            </div>

            <div className='terms-hero-preview__content'>
              <p className='terms-hero-preview__content--eyebrow'>{title}</p>

              <h2 className='terms-hero-preview__content--subtitle'>
                {subtitle}
              </h2>
            </div>
          </div>

          <div className='terms-hero-preview__status'>
            <div className='terms-hero-preview__status-icon'>
              <StatusIcon
                size={17}
                strokeWidth={1.8}
                role='img'
                aria-hidden='true'
                focusable='false'
              />
            </div>

            <div className='terms-hero-preview__status-wrapper'>
              <span className='terms-hero-preview__status-label'>
                {status.label}
              </span>

              <strong className='terms-hero-preview__status-value'>
                {status.value}
              </strong>
            </div>

            <Check
              size={16}
              strokeWidth={1.8}
              role='img'
              aria-hidden='true'
              focusable='false'
            />
          </div>

          <div className='terms-hero-preview__metrics'>
            {metrics.map((metric) => {
              const { label, value, description, icon: MetricIcon } = metric;

              return (
                <article key={label} className='terms-hero-preview__metric'>
                  <div className='terms-hero-preview__metric-icon'>
                    <MetricIcon
                      size={17}
                      strokeWidth={1.8}
                      role='img'
                      aria-hidden='true'
                      focusable='false'
                    />
                  </div>

                  <div className='terms-hero-preview__metric-content'>
                    <span className='terms-hero-preview__metric-label'>
                      {label}
                    </span>

                    <strong className='terms-hero-preview__metric-value'>
                      {value}
                    </strong>

                    <small className='terms-hero-preview__metric-description'>
                      {description}
                    </small>
                  </div>
                </article>
              );
            })}
          </div>

          <div className='terms-hero-preview__permissions'>
            <div className='terms-hero-preview__section-heading'>
              <div>
                <span>Access scope</span>
                <strong>Authorized permissions</strong>
              </div>

              <Sparkles
                size={17}
                strokeWidth={1.8}
                role='img'
                aria-hidden='true'
                focusable='false'
              />
            </div>

            <ul className='terms-hero-preview__list'>
              {permissions.map((permission) => (
                <li key={permission} className='terms-hero-preview__item'>
                  <span className='terms-hero-preview__item--check'>
                    <Check
                      size={12}
                      strokeWidth={2.5}
                      role='img'
                      aria-hidden='true'
                      focusable='false'
                    />
                  </span>

                  <span className='terms-hero-preview__item--value'>
                    {permission}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className='terms-hero-preview__floating-badge'>
        <div className='terms-hero-preview__floating-icon'>
          <LockKeyhole
            size={16}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />
        </div>

        <div className='terms-hero-preview__floating-content'>
          <span>Protected</span>
          <strong>OAuth Session</strong>
        </div>
      </div>
    </motion.div>
  );
};

export default TermsHeroPreview;
