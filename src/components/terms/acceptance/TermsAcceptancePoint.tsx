'use client';

import clsx from 'clsx';
import { TermsAcceptancePointProps } from '@/types/terms/acceptance/terms.acceptance.point.type';

import '../../../styles/components/terms/acceptance/TermsAcceptancePoint.scss';

const TermsAcceptancePoint = ({
  title,
  description,
  icon: Icon,
  accentColor,
  count,
  className,
  style,
}: TermsAcceptancePointProps) => {
  return (
    <article
      className={clsx('terms-acceptance-point', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='terms-acceptance-point__icon'>
        <Icon
          size={18}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='terms-acceptance-point__content'>
        <span className='terms-acceptance-point__content--count'>
          {String(count).padStart(2, '0')}
        </span>

        <h3 className='terms-acceptance-point__content--title'>{title}</h3>

        <p className='terms-acceptance-point__content--description'>
          {description}
        </p>
      </div>
    </article>
  );
};

export default TermsAcceptancePoint;
