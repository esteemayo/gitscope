'use client';

import Link from 'next/link';
import clsx from 'clsx';
import { ArrowUpRight } from 'lucide-react';

import { TermsTableOfContentsItemProps } from '@/types/terms/tableOfContents/terms.table.of.contents.item.type';
import '../../../styles/components/terms/tableOfContents/TermsTableOfContentsItem.scss';

const TermsTableOfContentItem = ({
  id,
  title,
  description,
  icon: Icon,
  count,
  className,
  style,
}: TermsTableOfContentsItemProps) => {
  return (
    <Link
      href={`#${id}`}
      className={clsx('terms-table-of-contents-item', className)}
      style={style}
    >
      <span className='terms-table-of-contents-item__number'>
        {String(count)}
      </span>

      <span className='terms-table-of-contents-item__icon'>
        <Icon
          size={18}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </span>

      <div className='terms-table-of-contents-item__content'>
        <strong className='terms-table-of-contents-item__content--title'>
          {title}
        </strong>

        <span className='terms-table-of-contents-item__content--description'>
          {description}
        </span>
      </div>

      <span className='terms-table-of-contents-item__arrow'>
        <ArrowUpRight size={17} strokeWidth={1.8} aria-hidden='true' />
      </span>
    </Link>
  );
};

export default TermsTableOfContentItem;
