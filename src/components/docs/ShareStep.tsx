'use client';

import clsx from 'clsx';
import { ShareStepProps } from '@/types/docs/exportSharing/share.step.type';

import '../../styles/components/docs/ShareStep.scss';

const ShareStep = ({
  title,
  description,
  accentColor,
  index,
  className,
  style,
}: ShareStepProps) => {
  return (
    <article
      className={clsx('share-step', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <span className='share-step__number'>
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className='share-step__body'>
        <h3 className='share-step__body--title'>{title}</h3>

        <p className='share-step__body--description'>{description}</p>
      </div>
    </article>
  );
};

export default ShareStep;
