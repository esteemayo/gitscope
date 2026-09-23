'use client';

import clsx from 'clsx';
import { ActivityItemProps } from '@/types/docs/contributions/activity.item.type';

import '../../styles/components/docs/ActivityItem.scss';

const ActivityItem = ({
  label,
  description,
  accentColor,
  className,
  style,
}: ActivityItemProps) => {
  return (
    <div
      className={clsx('activity-item', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <span className='activity-item__marker' aria-hidden='true' />

      <div className='activity-item__content'>
        <strong className='activity-item__content--label'>{label}</strong>

        <p className='activity-item__content--description'>{description}</p>
      </div>
    </div>
  );
};

export default ActivityItem;
