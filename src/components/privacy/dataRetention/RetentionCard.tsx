'use client';

import clsx from 'clsx';
import { Clock3 } from 'lucide-react';

import { RetentionCardProps } from '@/types/privacy/dataRetention/retention.card.type';
import '../../../styles/components/privacy/dataRetention/RetentionCard.scss';

const RetentionCard = ({
  title,
  description,
  retention,
  reason,
  icon: Icon,
  accentColor,
  className,
  style,
}: RetentionCardProps) => {
  return (
    <article
      className={clsx('retention-card', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <header className='retention-card__header'>
        <div className='retention-card__icon'>
          <Icon size={22} role='img' aria-hidden='true' focusable='false' />
        </div>

        <div className='retention-card__heading'>
          <h3 className='retention-card__heading--title'>{title}</h3>

          <p className='retention-card__heading--description'>{description}</p>
        </div>
      </header>

      <div className='retention-card__retention'>
        <div className='retention-card__retention-icon'>
          <Clock3 size={16} role='img' aria-hidden='true' focusable='false' />
        </div>

        <div className='retention-card__retention-wrapper'>
          <span className='retention-card__retention-wrapper--label'>
            Retention
          </span>

          <p className='retention-card__retention-wrapper--value'>
            {retention}
          </p>
        </div>
      </div>

      <div className='retention-card__reason'>
        <span className='retention-card__reason--label'>Why we retain it</span>

        <p className='retention-card__reason--value'>{reason}</p>
      </div>
    </article>
  );
};

export default RetentionCard;
