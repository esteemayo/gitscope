'use client';

import clsx from 'clsx';
import { DocsStepProps } from '@/types/docs/docsCard/docs.step.type';

import '../../../styles/components/docs/home/DocsStep.scss';

const DocsStep = ({
  label,
  description,
  accentColor,
  index,
  className,
  style,
}: DocsStepProps) => {
  return (
    <article
      className={clsx('docs-step', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <span className='docs-step__number'>
        {String(index + 1).padStart(2, '0')}
      </span>

      <strong className='docs-step__label'>{label}</strong>

      <p className='docs-step__description'>{description}</p>
    </article>
  );
};

export default DocsStep;
