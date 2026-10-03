'use client';

import type { LucideIcon } from 'lucide-react';

interface SavedStatProps {
  label: string;
  value: number;
  icon: LucideIcon;
  accentColor: string;
}

const SavedStat = ({
  label,
  value,
  icon: Icon,
  accentColor,
}: SavedStatProps) => {
  return (
    <article
      className='saved-stat'
      style={
        {
          '--accent-color': accentColor,
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
        <strong className='saved-stat__content--value'>{value}</strong>

        <span className='saved-stat__content--label'>{label}</span>
      </div>
    </article>
  );
};

export default SavedStat;
