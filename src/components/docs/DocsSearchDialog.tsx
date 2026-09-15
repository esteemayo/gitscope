'use client';

import { FileText, Search } from 'lucide-react';
import clsx from 'clsx';
import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';

import { useFocusTrap } from '@/hooks/useFocusTrap';
import { useScrollLock } from '@/hooks/useScrollLock';

import { docsNavigation } from '@/data/docs/docs-navigation.data';
import { SearchResult } from '@/types/docs/docsSearchDialog';
import { DocsSearchDialogProps } from '@/types/docs/docsSearchDialog/docs.search.dialog.type';

import '../../styles/components/docs/DocsSearchDialog.scss';

const searchResults: SearchResult[] = docsNavigation.flatMap((section) =>
  section.items.map((item) => ({
    title: item.title,
    href: item.href,
    description: item.description,
    section: item.title,
  })),
);

const DocsSearchDialog = ({ isOpen, setIsOpen }: DocsSearchDialogProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const results = useMemo(() => {
    const value = query.trim().toLowerCase();

    if (!value) {
      return searchResults.slice(0, 8);
    }

    return searchResults
      .filter((item) => {
        const searchable = [item.title, item.description, item.section]
          .filter(Boolean)
          .join(' ')
          .toLowerCase();

        return searchable.includes(value);
      })
      .slice(0, 8);
  }, [query]);

  useScrollLock(isOpen);
  useFocusTrap(ref, isOpen);

  useEffect(() => {
    const handleKeyboard = (e: KeyboardEvent) => {
      const modifier = e.metaKey || e.ctrlKey;

      if (modifier && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }

      if (e.key === 'Escape' || e.code === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyboard);
    return () => window.removeEventListener('keydown', handleKeyboard);
  }, [setIsOpen]);

  useEffect(() => {
    let frame: number;

    if (!isOpen) {
      frame = requestAnimationFrame(() => {
        setQuery('');
        setSelectedIndex(0);
      });
    }

    return () => cancelAnimationFrame(frame);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleNavigation = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();

        setSelectedIndex((current) =>
          Math.min(current + 1, results.length - 1),
        );
      }

      if (e.key === 'ArrowUp') {
        e.preventDefault();

        setSelectedIndex((current) => Math.max(current - 1, 0));
      }

      if (e.key === 'Enter') {
        const result = results[selectedIndex];

        if (result) {
          window.location.href = result.href;
        }
      }
    };

    window.addEventListener('keydown', handleNavigation);
    return () => window.removeEventListener('keydown', handleNavigation);
  }, [isOpen, results, selectedIndex]);

  if (!isOpen) return null;

  return (
    <div
      className='docs-search-dialog'
      role='dialog'
      aria-modal='true'
      aria-label='Search documentation'
    >
      <button
        type='button'
        onClick={() => setIsOpen(false)}
        className='docs-search-dialog__backdrop'
        aria-label='Close search'
      />

      <div ref={ref} className='docs-search-dialog__panel'>
        <div className='docs-search-dialog__input'>
          <Search
            size={18}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />

          <input
            autoFocus
            type='search'
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder='Search documentation...'
            aria-label='Search documentation'
          />

          <kbd>Esc</kbd>
        </div>

        <div
          className='docs-search-dialog__results'
          role='listbox'
          aria-label='Documentation results'
        >
          {results.length > 0 ? (
            results.map((result, index) => {
              const { title, href, description, section } = result;

              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={clsx('docs-search-dialog__result', {
                    'docs-search-dialog__result--active':
                      index === selectedIndex,
                  })}
                  role='option'
                  aria-selected={index === selectedIndex}
                >
                  <span className='docs-search-dialog__result-icon'>
                    <FileText
                      size={16}
                      strokeWidth={1.8}
                      role='img'
                      aria-hidden='true'
                      focusable='false'
                    />
                  </span>

                  <div className='docs-search-dialog__result-content'>
                    <strong>{title}</strong>

                    <small>{section}</small>

                    <p>{description}</p>
                  </div>
                </Link>
              );
            })
          ) : (
            <div className='docs-search-dialog__empty'>
              No documentation found for {`"${query}"`}
            </div>
          )}
        </div>

        <div className='docs-search-dialog__footer'>
          <span>↑ ↓ Navigate</span>

          <span>↵ Open</span>

          <span>Esc Close</span>
        </div>
      </div>
    </div>
  );
};

export default DocsSearchDialog;
