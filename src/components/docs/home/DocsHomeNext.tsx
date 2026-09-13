'use client';

import Link from 'next/link';
import clsx from 'clsx';
import { ArrowRight } from 'lucide-react';

import { DocsHomeNextProps } from '@/types/docs/docsCard/docs.home.next.type';
import '../../../styles/components/docs/home/DocsHomeNext.scss';

const DocsHomeNext = ({
  id,
  label,
  title,
  cta,
  className,
  style,
}: DocsHomeNextProps) => {
  return (
    <section
      id={id}
      className={clsx('docs-home-next', className)}
      style={style}
    >
      <span className='docs-home-next__label'>{label}</span>

      <h2 className='docs-home-next__title'>{title}</h2>

      <Link href={cta.href} className='docs-home-next__action'>
        <span>{cta.label}</span>

        <ArrowRight
          size={14}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </Link>
    </section>
  );
};

export default DocsHomeNext;
