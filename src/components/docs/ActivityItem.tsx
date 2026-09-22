'use client';

import clsx from 'clsx';
import '../../styles/components/docs/ActivityItem.scss';

interface ActivityItemProps {
  label: string;
  description: string;
  accentColor: string;
  className?: string;
  style?: React.CSSProperties;
}

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
