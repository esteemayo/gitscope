'use client';

import clsx from 'clsx';
import { ContributionCardProps } from '@/types/docs/contributions/contribution.card.type';

import '../../styles/components/docs/ContributionCard.scss';

const ContributionCard = ({
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
      <span className='contribution-card__indicator' aria-hidden='true' />

      <div className='contribution-card__content'>
        <h3 className='contribution-card__content--title'>{title}</h3>

        <p className='contribution-card__content--description'>{description}</p>
      </div>
    </article>
  );
};

export default ContributionCard;
