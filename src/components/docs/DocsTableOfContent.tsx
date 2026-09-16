'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';

import { DocsTableOfContentProps } from '@/types/docs/docsTableOfContent/docs.table.of.content.type';
import '../../styles/components/docs/DocsTableOfContent.scss';

interface Heading {
  id: string;
  text: string;
}

const DocsTableOfContent = ({ links }: DocsTableOfContentProps) => {
  const [activeId, setActiveId] = useState('#introduction');
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const article = document.querySelector('.docs-article__content');
    console.log(article);
  }, []);

  return (
    <aside className='docs-table-of-content' aria-label='On this page'>
      <div className='docs-table-of-content__inner'>
        <span className='docs-table-of-content__label'>On this page</span>

        <nav className='docs-table-of-content__nav'>
          {links.map((link) => {
            const { href, label } = link;

            return (
              <a
                key={href}
                href={href}
                className={clsx('docs-table-of-content__nav--item', {
                  'docs-table-of-content__nav--item is-active':
                    activeId === href,
                })}
              >
                {label}
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default DocsTableOfContent;
