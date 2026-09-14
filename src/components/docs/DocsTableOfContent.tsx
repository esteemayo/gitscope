'use client';

import Link from 'next/link';
import { DocsTableOfContentProps } from '@/types/docs/docsTableOfContent/docs.table.of.content.type';

import '../../styles/components/docs/DocsTableOfContent.scss';

const DocsTableOfContent = ({ links }: DocsTableOfContentProps) => {
  return (
    <aside className='docs-table-of-content'>
      <div className='docs-table-of-content__inner'>
        <span className='docs-table-of-content__label'>On this page</span>

        <nav className='docs-table-of-content__nav' aria-label='On this page'>
          {links.map((link) => {
            const { href, label } = link;

            return (
              <Link
                key={href}
                href={href}
                className='docs-table-of-content__nav--item'
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default DocsTableOfContent;
