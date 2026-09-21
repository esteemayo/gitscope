'use client';

import clsx from 'clsx';
import { RepositoryInsightCardProps } from '@/types/docs/repositoryInsight/repository.insight.card.type';

import '../../styles/components/docs/RepositoryInsightCard.scss';

export const RepositoryInsightCard = ({
  title,
  description,
  accentColor,
  children,
  className,
  style,
}: RepositoryInsightCardProps) => {
  return (
    <article
      className={clsx('repository-insight-card', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <span className='repository-insight-card__indicator' aria-hidden='true' />

      <div className='repository-insight-card__content'>
        <h3 className='repository-insight-card__content--title'>{title}</h3>

        <p className='repository-insight-card__content--description'>
          {description}
        </p>

        {children}
      </div>
    </article>
  );
};

export default RepositoryInsightCard;
