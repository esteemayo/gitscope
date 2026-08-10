'use client';

import clsx from 'clsx';
import { RetentionStatCardProps } from '@/types/privacy/dataRetention/retention.stat.card.type';

import '../../../styles/components/privacy/dataRetention/RetentionStatCard.scss';

const RetentionStatCard = ({
  value,
  label,
  description,
  icon: Icon,
  accentColor,
  className,
  style,
}: RetentionStatCardProps) => {
  return (
    <article
      className={clsx('retention-stat-card', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='retention-stat-card__top'>
        <div className='retention-stat-card__top--icon'>
          <Icon size={20} role='img' aria-hidden='true' focusable='false' />
        </div>

        <span className='retention-stat-card__top--value'>{value}</span>
      </div>

      <div className='retention-stat-card__content'>
        <h3 className='retention-stat-card__content--label'>{label}</h3>

        <p className='retention-stat-card__content--description'>
          {description}
        </p>
      </div>
    </article>
  );
};

export default RetentionStatCard;
