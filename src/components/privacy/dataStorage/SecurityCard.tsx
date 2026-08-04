'use client';

import clsx from 'clsx';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

import { SecurityCardProps } from '@/types/privacy/dataStorageSecurity/security.card.type';
import '../../../styles/components/privacy/dataStorage/SecurityCard.scss';

const SecurityCard = ({
  title,
  description,
  icon: Icon,
  accentColor,
  category,
  highlightsTitle,
  highlights,
  summary,
  className,
  style,
}: SecurityCardProps) => {
  return (
    <article
      className={clsx('security-card', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <header className='security-card__header'>
        <div className='security-card__icon'>
          <Icon size={28} role='img' aria-hidden='true' focusable='false' />
        </div>

        <div className='security-card__heading'>
          <span className='security-card__heading--eyebrow'>{category}</span>

          <h3 className='security-card__heading--title'>{title}</h3>
        </div>
      </header>

      <p className='security-card__description'>{description}</p>

      <section className='security-card__highlights'>
        <h4 className='security-card__highlights--heading'>
          {highlightsTitle}
        </h4>

        <ul className='security-card__list'>
          {highlights.map((item) => {
            const { id, label } = item;

            return (
              <li key={id} className='security-card__item'>
                <CheckCircle2
                  size={18}
                  className='security-card__item--icon'
                  role='img'
                  aria-hidden='true'
                  focusable='false'
                />

                <span className='security-card__item--label'>{label}</span>
              </li>
            );
          })}
        </ul>
      </section>

      <footer className='security-card__summary'>
        <ShieldCheck
          size={20}
          className='security-card__summary--icon'
          role='img'
          aria-hidden='true'
          focusable='false'
        />

        <div className='security-card__summary-content'>
          <h4 className='security-card__summary-content--title'>
            {summary.title}
          </h4>

          <p className='security-card__summary-content--description'>
            {summary.description}
          </p>
        </div>
      </footer>
    </article>
  );
};

export default SecurityCard;
