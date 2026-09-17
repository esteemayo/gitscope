'use client';

import '../../styles/components/docs/ConceptCard.scss';

interface ConceptCardProps {
  title: string;
  description: string;
  accentColor: string;
  children?: React.ReactNode;
}

const ConceptCard = ({
  title,
  description,
  accentColor,
  children,
}: ConceptCardProps) => {
  return (
    <article
      className='concept-card'
      style={
        {
          '--accent-color': accentColor,
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
