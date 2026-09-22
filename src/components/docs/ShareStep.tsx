'use client';

import clsx from 'clsx';

import '../../styles/components/docs/ShareStep.scss';

interface ShareStepProps {
  number: string;
  title: string;
  description: string;
  accentColor: string;
  className?: string;
  style?: React.CSSProperties;
}

const ShareStep = ({
  number,
  title,
  description,
  accentColor,
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
      <span className='share-step__number'>{number}</span>

      <div className='share-step__body'>
        <h3 className='share-step__body--title'>{title}</h3>

        <p className='share-step__body--description'>{description}</p>
      </div>
    </article>
  );
};

export default ShareStep;
