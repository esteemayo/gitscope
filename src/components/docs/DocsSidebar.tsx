'use client';

import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

import { DocsSidebarProps } from '@/types/docs/docsSidebar/docs.sidebar.type';
import '../../styles/components/docs/DocsSidebar.scss';

const DocsSidebar = ({ navigation }: DocsSidebarProps) => {
  const pathname = usePathname();
  return (
    <aside className='docs-sidebar'>
      <nav className='docs-sidebar__nav' aria-label='Documentation'>
        {navigation.map((section) => {
          const { title, items } = section;

          return (
            <div key={title} className='docs-sidebar__section'>
              <span className='docs-sidebar__title'>{title}</span>

              {items.map((item) => {
                const { title, href, icon: Icon } = item;
                const isActive = pathname === href;

                return (
                  <div key={href} className='docs-sidebar__items'>
                    <Link
                      href={href}
                      className={clsx('docs-sidebar__item', {
                        'docs-sidebar__item--active': isActive,
                      })}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {Icon && (
                        <Icon
                          size={15}
                          strokeWidth={1.8}
                          role='img'
                          aria-hidden='true'
                          focusable='false'
                        />
                      )}

                      <span>{title}</span>
                    </Link>
                  </div>
                );
              })}
            </div>
          );
        })}
      </nav>
    </aside>
  );
};

export default DocsSidebar;
