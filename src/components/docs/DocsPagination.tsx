'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import { DocsPaginationProps } from '@/types/docs/pagination/docs.pagimation.type';
import '../../styles/components/docs/DocsPagination.scss';

const DocsPagination = ({ previous, next }: DocsPaginationProps) => {
  return (
    <nav className='docs-pagination' aria-label='Documentation pagination'>
      {previous ? (
        <Link href={previous.href} className='docs-pagination__item'>
          <span>
            <ArrowLeft
              size={14}
              strokeWidth={1.8}
              role='img'
              aria-hidden='true'
              focusable='false'
            />
            Previous
          </span>

          <strong>{previous.title}</strong>
        </Link>
      ) : (
        <span />
      )}

      {next ? (
        <Link
          href={next.href}
          className='docs-pagination__item docs-pagination__item--next'
        >
          <span>
            <ArrowRight
              size={14}
              strokeWidth={1.8}
              role='img'
              aria-hidden='true'
              focusable='false'
            />
            Next
          </span>

          <strong>{next.title}</strong>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
};

export default DocsPagination;
