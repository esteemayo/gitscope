import { Check } from 'lucide-react';
import { AudienceCardProps } from '@/types/about/whoItsFor/audience.card.type';

import '../../../styles/components/about/whoItsFor/AudienceCard.scss';

const AudienceCard = ({
  audience: { icon: Icon, title, description, benefits, useCase, accentColor },
}: AudienceCardProps) => {
  return (
    <article
      className='audience-card'
      style={
        {
          '--accent-color': accentColor,
        } as React.CSSProperties
      }
    >
      <div className='audience-card__icon'>
        <Icon size={28} />
      </div>

      <div className='audience-card__content'>
        <h3 className='audience-card__content--title'>{title}</h3>

        <p className='audience-card__content--description'>{description}</p>
      </div>

      <div className='audience-card__divider' />

      <ul className='audience-card__list'>
        {benefits.map((benefit) => (
          <li key={benefit} className='audience-card__item'>
            <Check size={16} className='audience-card__item--check' />

            <span className='audience-card__item--label'>{benefit}</span>
          </li>
        ))}
      </ul>

      <footer className='audience-card__footer'>
        <span className='audience-card__footer--badge'>Best for</span>

        <strong className='audience-card__footer--value'>{useCase}</strong>
      </footer>
    </article>
  );
};

export default AudienceCard;
