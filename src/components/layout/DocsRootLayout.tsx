'use client';

import Link from 'next/link';

import DocsFooter from '../docs/DocsFooter';
import DocsHeader from '../docs/DocsHeader';
import DocsSidebar from '../docs/DocsSidebar';

import { docsLink } from '@/data/docs/docs-footer.data';
import { docsNavigation } from '@/data/docs/docs-navigation.data';

import '../../styles/components/docs/DocsLayout.scss';

const DocsRootLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className='docs-root-layout'>
      <DocsHeader />

      <div className='docs-root-layout__body'>
        <DocsSidebar navigation={docsNavigation} />

        <main id='docs-content' className='docs-root-layout__main'>
          {children}
        </main>

        <aside className='docs-root-layout__toc'>
          <div className='docs-root-layout__toc-inner'>
            <span className='docs-root-layout__toc-label'>On this page</span>

            <nav
              className='docs-root-layout__toc-nav'
              aria-label='On this page'
            >
              <Link href='#introduction'>Introduction</Link>

              <Link href='#how-it-works'>How GitScope works</Link>

              <Link href='#next-steps'>Next steps</Link>
            </nav>
          </div>
        </aside>
      </div>

      <DocsFooter navItems={docsLink} />
    </div>
  );
};

export default DocsRootLayout;
