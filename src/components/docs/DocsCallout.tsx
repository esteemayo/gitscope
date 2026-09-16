'use client';

import clsx from 'clsx';
import { AlertTriangle, Info, Lightbulb, ShieldAlert } from 'lucide-react';

import { DocsCalloutProps } from '@/types/docs/docsCallout/docs.callout.type';
import '../../styles/components/docs/DocsCallout.scss';

const icons = {
  note: Info,
  tip: Lightbulb,
  warning: AlertTriangle,
  danger: ShieldAlert,
};

const accents = {
  note: '#8B5CF6',
  tip: '#22C55E',
  warning: '#F59E0B',
  danger: '#EF4444',
};

const DocsCallout = ({
  type = 'note',
  title,
  children,
  className,
  style,
}: DocsCalloutProps) => {
  const Icon = icons[type];
  const accentColor = accents[type];

  return (
    <aside
      className={clsx(`docs-callout docs-callout--${type}`, { className })}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
      role={type === 'danger' ? 'alert' : undefined}
    >
      <div className='docs-callout__icon'>
        <Icon
          size={18}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='docs-callout__wrapper'>
        {title && <strong className='docs-callout__title'>{title}</strong>}

        <div className='docs-callout__content'>{children}</div>
      </div>
    </aside>
  );
};

export default DocsCallout;
