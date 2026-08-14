'use client';

import Link from 'next/link';
import clsx from 'clsx';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

import { PrivacyPrincipleProps } from '@/types/privacy/privacyPrinciples/privacy.principle.type';
import '../../../styles/components/privacy/privacyPrinciples/PrivacyPrinciple.scss';

const PrivacyPrinciple = ({
  eyebrow,
  title,
  description,
  icon: Icon,
  accentColor,
  highlights,
  reverse = false,
  cta,
  className,
  style,
}: PrivacyPrincipleProps) => {
  return (
    <article
      className={clsx(
        'privacy-principle',
        { 'privacy-principle--reverse': reverse },
        className,
      )}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='privacy-principle__icon-panel'>
        <div className='privacy-principle__icon' aria-hidden='true'>
          <Icon size={56} role='img' aria-hidden='true' focusable='false' />
        </div>
      </div>

      <div className='privacy-principle__body'>
        <div className='privacy-principle__content'>
          <span className='privacy-principle__content--eyebrow'>{eyebrow}</span>

          <h3 className='privacy-principle__content--title'>{title}</h3>

          <p className='privacy-principle__content--description'>
            {description}
          </p>
        </div>

        <ul className='privacy-principle__highlights'>
          {highlights.map((highlight) => (
            <li key={highlight} className='privacy-principle__highlight'>
              <CheckCircle2
                size={16}
                role='img'
                aria-hidden='true'
                focusable='false'
                className='privacy-principle__highlight--icon'
              />

              <span className='privacy-principle__highlight--label'>
                {highlight}
              </span>
            </li>
          ))}
        </ul>

        {cta && (
          <Link href={cta.href} className='privacy-principle__cta'>
            <span className='privacy-principle__cta--label'>{cta.label}</span>

            <ArrowRight
              size={16}
              role='img'
              aria-hidden='true'
              focusable='false'
              className='privacy-principle__cta--icon'
            />
          </Link>
        )}
      </div>
    </article>
  );
};

export default PrivacyPrinciple;
