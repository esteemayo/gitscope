'use client';

import clsx from 'clsx';
import { DocsFeatureProps } from '@/types/docs/feature/docs.feature.type';

import '../../../styles/components/docs/home/DocsFeature.scss';

const DocsFeature = ({
  title,
  description,
  accentColor,
  className,
  style,
}: DocsFeatureProps) => {
  return (
    <article
      className={clsx('docs-feature', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='docs-feature__content'>
        <h3 className='docs-feature__content--title'>{title}</h3>

        <p className='docs-feature__content--description'>{description}</p>
      </div>
    </article>
  );
};

export default DocsFeature;
