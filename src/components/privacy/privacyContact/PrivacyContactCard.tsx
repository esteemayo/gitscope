'use client';

import clsx from 'clsx';
import { ArrowUpRight } from 'lucide-react';

import { PrivacyContactCardProps } from '@/types/privacy/privacyContact/privacy.contact.card.type';
import '../../../styles/components/privacy/privacyContact/PrivacyContactCard.scss';

const PrivacyContactCard = ({
  title,
  description,
  icon: Icon,
  accentColor,
  action,
  className,
  style,
}: PrivacyContactCardProps) => {
  return (
    <article
      className={clsx('privacy-contact-card', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='privacy-contact-card__icon' aria-hidden='true'>
        <Icon size={22} role='img' aria-hidden='true' focusable='false' />
      </div>

      <div className='privacy-contact-card__content'>
        <h3 className='privacy-contact-card__content--title'>{title}</h3>

        <p className='privacy-contact-card__content--description'>
          {description}
        </p>
      </div>

      {action && (
        <div className='privacy-contact-card__action'>
          <a href={action.href} className='privacy-contact-card__action--link'>
            {action.label}

            <ArrowUpRight
              size={16}
              className='privacy-contact-card__action--arrow'
              role='img'
              aria-hidden='true'
              focusable='false'
            />
          </a>
        </div>
      )}
    </article>
  );
};

export default PrivacyContactCard;
