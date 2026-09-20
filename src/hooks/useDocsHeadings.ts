'use client';

import { useEffect, useState } from 'react';

export interface DocsHeading {
  id: string;
  text: string;
  level: 2 | 3;
}

interface UseDocsHeadingsOptions {
  selector?: string;
}

const createHeadingId = (text: string, index: number) => {
  const slug = text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

  return slug || `heading-${index}`;
};

export const useDocsHeadings = ({
  selector = '.docs-article__content h2, .docs-article__content h3',
}: UseDocsHeadingsOptions = {}) => {
  const [activeId, setActiveId] = useState('');
  const [headings, setHeadings] = useState<DocsHeading[]>([]);

  useEffect(() => {
    const article = document.querySelector('.docs-article__content');

    if (!article) return;

    const elements = Array.from(
      article.querySelectorAll<HTMLHeadingElement>(selector),
    );

    const nextHeadings = elements.map((heading, index) => {
      const id =
        heading.id || createHeadingId(heading.textContent || '', index);

      heading.id = id;

      return {
        id,
        text: heading.textContent?.trim() || '',
        level: heading.tagName === 'H3' ? 3 : 2,
      } satisfies DocsHeading;
    });

    setHeadings(nextHeadings);

    if (!nextHeadings.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleHeading = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          )[0];

        if (visibleHeading) {
          setActiveId(visibleHeading.target.id);
        }
      },
      {
        rootMargin: '-96px 0px -65% 0px',
      },
    );

    elements.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, [selector]);

  return {
    activeId,
    headings,
  };
};
