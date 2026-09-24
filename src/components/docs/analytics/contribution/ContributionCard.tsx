'use client';

import clsx from 'clsx';
import { ContributionCardProps } from '@/types/docs/analytics/contribution/contribution.card.type';

import '../../../../styles/components/docs/analytics/contribution/ContributionCard.scss';

const ContributionCard = ({
  icon: Icon,
  title,
  description,
  accentColor,
  className,
  style,
}: ContributionCardProps) => {
  return (
    <article
      className={clsx('contribution-card', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='contribution-card__icon'>
        <Icon
          size={20}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='contribution-card__content'>
        <h3 className='contribution-card__content--title'>{title}</h3>

        <p className='contribution-card__content--description'>{description}</p>
      </div>
    </article>
  );
};

export default ContributionCard;
