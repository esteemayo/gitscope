'use client';

import clsx from 'clsx';
import { DocsFeatureCardProps } from '@/types/docs/featureCard/feature.card.type';

import '../../styles/components/docs/DocsFeatureCard.scss';

const DocsFeatureCard = ({
  icon: Icon,
  title,
  description,
  items,
  accentColor,
  className = '',
  style,
}: DocsFeatureCardProps) => {
  return (
    <article
      className={clsx('docs-feature-card', className).trim()}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      {Icon && (
        <div className='docs-feature-card__icon'>
          <Icon
            size={20}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />
        </div>
      )}

      <div className='docs-feature-card__content'>
        <h3 className='docs-feature-card__content--title'>{title}</h3>

        <p className='docs-feature-card__content--description'>{description}</p>

        {items && (
          <ul>
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
};

export default DocsFeatureCard;
