'use client';

import clsx from 'clsx';
import { ComparisonCardProps } from '@/types/docs/compare/comparison.card.type';

import '../../styles/components/docs/ComparisonCard.scss';

const ComparisonCard = ({
  title,
  description,
  accentColor,
  items,
  className,
  style,
}: ComparisonCardProps) => {
  return (
    <article
      className={clsx('comparison-card', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <span className='comparison-card__indicator' aria-hidden='true' />

      <div className='comparison-card__content'>
        <h3 className='comparison-card__content--title'>{title}</h3>

        <p className='comparison-card__content--description'>{description}</p>

        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ComparisonCard;
