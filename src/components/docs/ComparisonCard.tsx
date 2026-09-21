'use client';

import '../../styles/components/docs/ComparisonCard.scss';

type ComparisonCardProps = {
  title: string;
  description: string;
  accentColor: string;
  items: string[];
};

const ComparisonCard = ({
  title,
  description,
  accentColor,
  items,
}: ComparisonCardProps) => {
  return (
    <article
      className='comparison-card'
      style={
        {
          '--accent-color': accentColor,
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
