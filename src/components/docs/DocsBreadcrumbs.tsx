'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

import { DocsBreadcrumbsProps } from '@/types/docs/breadcrumb/docs.breadcrumbs.type';
import '../../styles/components/docs/DocsBreadcrumbs.scss';

const DocsBreadcrumbs = ({ category, title }: DocsBreadcrumbsProps) => {
  return (
    <nav className='docs-breadcrumbs' aria-label='Breadcrumb'>
      <Link href='/documentation' className='docs-breadcrumbs__link'>
        Docs
      </Link>

      <ChevronRight
        size={14}
        strokeWidth={1.8}
        role='img'
        aria-hidden='true'
        focusable='false'
      />

      <span className='docs-breadcrumbs__category'>{category}</span>

      <ChevronRight
        size={14}
        strokeWidth={1.8}
        role='img'
        aria-hidden='true'
        focusable='false'
      />

      <span className='docs-breadcrumbs__title' aria-current='page'>
        {title}
      </span>
    </nav>
  );
};

export default DocsBreadcrumbs;
