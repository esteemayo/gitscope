'use client';

import clsx from 'clsx';
import { ConceptCardProps } from '@/types/docs/keyConcepts/concept.card.type';

import '../../styles/components/docs/ConceptCard.scss';

const ConceptCard = ({
  title,
  description,
  accentColor,
  children,
  className,
  style,
}: ConceptCardProps) => {
  return (
    <article
      className={clsx('concept-card', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='concept-card__marker' />

      <div className='concept-card__content'>
        <h3 className='concept-card__content--title'>{title}</h3>

        <p className='concept-card__content--description'>{description}</p>

        {children}
      </div>
    </article>
  );
};

export default ConceptCard;
