'use client';

import clsx from 'clsx';
import { DocsFeatureItemProps } from '@/types/docs/featureItem/feature.item.type';

import '../../styles/components/docs/DocsFeatureItem.scss';

const DocsFeatureItem = ({
  title,
  description,
  accentColor,
  className = '',
  style,
}: DocsFeatureItemProps) => {
  return (
    <div
      className={clsx('docs-feature-item', className).trim()}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <span className='docs-feature-item__marker' aria-hidden='true' />

      <div className='docs-feature-item__content'>
        <h3 className='docs-feature-item__content--title'>{title}</h3>

        <p className='docs-feature-item__content--description'>{description}</p>
      </div>
    </div>
  );
};

export default DocsFeatureItem;
