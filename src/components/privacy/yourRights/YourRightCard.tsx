'use client';

import clsx from 'clsx';
import { YourRightCardProps } from '@/types/privacy/yourRights/your.right.card.type';

import '../../../styles/components/privacy/yourRights/YourRightCard.scss';

const YourRightCard = ({
  title,
  description,
  icon: Icon,
  accentColor,
  className,
  style,
}: YourRightCardProps) => {
  return (
    <article
      className={clsx('your-right-card', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='your-right-card__icon'>
        <Icon size={24} role='img' aria-hidden='true' focusable='false' />
      </div>

      <div className='your-right-card__content'>
        <h3 className='your-right-card__content--title'>{title}</h3>

        <p className='your-right-card__content--description'>{description}</p>
      </div>
    </article>
  );
};

export default YourRightCard;
