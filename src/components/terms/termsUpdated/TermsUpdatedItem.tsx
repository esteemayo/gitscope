'use client';

import clsx from 'clsx';
import { TermsUpdatedItemProps } from '@/types/terms/termsUpdated/terms.updated.item.type';

import '../../../styles/components/terms/termsUpdated/TermsUpdatedItem.scss';

const TermsUpdatedItem = ({
  label,
  value,
  icon: Icon,
  className,
  style,
}: TermsUpdatedItemProps) => {
  return (
    <article className={clsx('terms-updated-item', className)}>
      <div className='terms-updated-item__icon'>
        <Icon />
      </div>

      <div className='terms-updated-item__content'>CONTENT</div>
    </article>
  );
};

export default TermsUpdatedItem;
