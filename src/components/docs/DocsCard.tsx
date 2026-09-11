'use client';

import Link from 'next/link';
import clsx from 'clsx';
import { ArrowUpRight } from 'lucide-react';

import { DocsCardProps } from '@/types/docs/docsCard/docs.card.type';
import '../../styles/components/docs/DocsCard.scss';

const DocsCard = ({
  title,
  description,
  href,
  icon: Icon,
  accentColor,
  className,
  style,
}: DocsCardProps) => {
  return (
    <Link
      href={href}
      className={clsx('docs-card', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='docs-card__rail' />

      <div className='docs-card__icon'>
        <Icon
          size={20}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='docs-card__content'>
        <h3 className='docs-card__content--title'>{title}</h3>

        <p className='docs-card__content--description'>{description}</p>

        <span className='docs-card__content--link'>
          Read documentation
          <ArrowUpRight
            size={14}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />
        </span>
      </div>
    </Link>
  );
};

export default DocsCard;
