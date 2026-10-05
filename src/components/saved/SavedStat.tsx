'use client';

import clsx from 'clsx';
import { SavedStatProps } from '@/types/saved/saved.stat.type';

import '../../styles/components/saved/SavedStat.scss';

const SavedStat = ({
  label,
  value,
  icon: Icon,
  accentColor,
  className,
  style,
}: SavedStatProps) => {
  return (
    <article
      className={clsx('saved-stat', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='saved-stat__icon'>
        <Icon
          size={16}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='saved-stat__content'>
        <strong className='saved-stat__content--value'>
          {value.toLocaleString()}
        </strong>

        <span className='saved-stat__content--label'>{label}</span>
      </div>
    </article>
  );
};

export default SavedStat;
