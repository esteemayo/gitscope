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

const DocsCallout = ({
  type = 'note',
  title,
  accentColor = '#22C55E',
  children,
  className,
  style,
}: DocsCalloutProps) => {
  const Icon = icons[type];

  return (
    <aside
      className={clsx('docs-callout', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
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
