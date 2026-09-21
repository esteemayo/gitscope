'use client';

import clsx from 'clsx';
import { DocsHeading, useDocsHeadings } from '@/hooks/useDocsHeadings';

import '../../styles/components/docs/DocsTableOfContents.scss';

interface DocsTableOfContentsProps {
  headings?: DocsHeading[];
}

const DocsTableOfContents = ({
  headings: providedHeadings,
}: DocsTableOfContentsProps) => {
  const detected = useDocsHeadings();

  const activeId = detected.activeId;
  const headings = providedHeadings ?? detected.headings;

  if (!headings.length) {
    return null;
  }

  return (
    <aside className='docs-table-of-contents' aria-label='On this page'>
      <p className='docs-table-of-contents__title'>On this page</p>

      <nav className='docs-table-of-contents__nav'>
        <ul className='docs-table-of-contents__list'>
          {headings.map((link, index) => {
            const { id, text, level } = link;

            return (
              <li
                key={`${id}-${index}`}
                className={clsx('docs-table-of-contents__item', {
                  'docs-table-of-contents__item docs-table-of-contents__item--nested':
                    level === 3,
                })}
              >
                <a
                  href={`#${id}`}
                  className={clsx('docs-table-of-contents__link', {
                    'docs-table-of-contents__link is-active': activeId === id,
                  })}
                  aria-current={activeId === id ? 'location' : undefined}
                >
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default DocsTableOfContents;
