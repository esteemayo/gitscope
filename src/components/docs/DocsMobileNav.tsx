'use client';

import { useRef, useState } from 'react';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, X } from 'lucide-react';

import { useOverlay } from '@/hooks/useOverlay';
import { docsNavigation } from '@/data/docs/docs-navigation.data';

import '../../styles/components/docs/DocsMobileNav.scss';

const DocsMobileNav = () => {
  const pathname = usePathname();

  const ref = useRef<HTMLDivElement | null>(null);

  const [isOpen, setIsOpen] = useState(false);

  useOverlay(ref, { isOpen, onClose: () => setIsOpen(false) });

  return (
    <>
      <button
        type='button'
        onClick={() => setIsOpen(true)}
        className='docs-mobile-trigger'
        aria-label='Close navigation'
      >
        {[...Array(3)].map((_, index) => (
          <span key={index} aria-hidden='true' />
        ))}
      </button>

      {isOpen && (
        <div className='docs-mobile-nav'>
          <button
            type='button'
            onClick={() => setIsOpen(false)}
            className='docs-mobile-nav__backdrop'
            aria-label='Close navigation'
          />

          <aside
            ref={ref}
            className='docs-mobile-nav__panel'
            aria-label='Documentation navigation'
          >
            <div className='docs-mobile-nav__header'>
              <span className='docs-mobile-nav__header--heading'>
                Documentation
              </span>

              <button
                type='button'
                onClick={() => setIsOpen(false)}
                className='docs-mobile-nav__header--btn'
                aria-label='Close documentation navigation'
              >
                <X
                  size={18}
                  strokeWidth={1.8}
                  role='img'
                  aria-hidden='true'
                  focusable='false'
                />
              </button>
            </div>

            <nav className='docs-mobile-nav__navigation'>
              {docsNavigation.map((section) => {
                const { title, items } = section;

                return (
                  <div key={title} className='docs-mobile-nav__section'>
                    <span className='docs-mobile-nav__section--title'>
                      {title}
                    </span>

                    {items.map((item) => {
                      const { href, title } = item;
                      const isActive = pathname === href;

                      return (
                        <Link
                          key={href}
                          href={href}
                          className={clsx('docs-mobile-nav__item', {
                            'docs-mobile-nav__item is-active': isActive,
                          })}
                          aria-current={isActive ? 'page' : undefined}
                        >
                          <span className='docs-mobile-nav__item--title'>
                            {title}
                          </span>

                          <ChevronRight
                            size={14}
                            strokeWidth={1.8}
                            role='img'
                            aria-hidden='true'
                            focusable='false'
                          />
                        </Link>
                      );
                    })}
                  </div>
                );
              })}
            </nav>
          </aside>
        </div>
      )}
    </>
  );
};

export default DocsMobileNav;
