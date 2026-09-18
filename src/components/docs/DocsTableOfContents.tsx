'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';

import '../../styles/components/docs/DocsTableOfContents.scss';

interface Heading {
  id: string;
  text: string;
}

const DocsTableOfContentss = () => {
  const [activeId, setActiveId] = useState('#introduction');
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const article = document.querySelector('.docs-article__contents');

    if (!article) return;

    const elements = Array.from(article.querySelectorAll('h2, h3'));

    const mapped = elements.map((element) => {
      const id =
        element.id ||
        element.textContent
          ?.toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '') ||
        '';

      element.id = id;

      return {
        id,
        text: element.textContent || '',
      };
    });

    setHeadings(mapped);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: '-100px 0px -65% 0px',
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  if (!headings.length) {
    return null;
  }

  return (
    <aside className='docs-table-of-contents' aria-label='On this page'>
      <div className='docs-table-of-contents__inner'>
        <span className='docs-table-of-contents__label'>On this page</span>

        <nav className='docs-table-of-contents__nav'>
          {headings.map((link) => {
            const { id, text } = link;

            return (
              <a
                key={id}
                href={`#${id}`}
                className={clsx('docs-table-of-contents__nav--item', {
                  'docs-table-of-contents__nav--item is-active':
                    activeId === id,
                })}
                aria-current={activeId === id ? 'location' : undefined}
              >
                {text}
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default DocsTableOfContentss;
