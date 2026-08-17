'use client';

import clsx from 'clsx';
import { TermsUpdatedItemProps } from '@/types/terms/termsUpdated/terms.updated.item.type';

import '../../../styles/components/terms/termsUpdated/TermsUpdatedItem.scss';

const TermsUpdatedItem = ({
  label,
  value,
  icon: Icon,
  accentColor,
  className,
  style,
}: TermsUpdatedItemProps) => {
  return (
    <article
      className={clsx('terms-updated-item', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='terms-updated-item__icon'>
        <Icon
          size={20}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='terms-updated-item__content'>
        <span className='terms-updated-item__content--label'>{label}</span>

        <strong className='terms-updated-item__content--value'>{value}</strong>
      </div>
    </article>
  );
};

export default TermsUpdatedItem;
