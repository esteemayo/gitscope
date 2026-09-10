'use client';

import Link from 'next/link';

import DocsFooter from '../docs/DocsFooter';
import DocsHeader from '../docs/DocsHeader';
import DocsSidebar from '../docs/DocsSidebar';

import { docsNavigation } from '@/data/docs/docs-navigation.data';
import '../../styles/components/docs/DocsLayout.scss';

const DocsLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className='docs-layout'>
      <DocsHeader />

      <div className='docs-layout__body'>
        <DocsSidebar navigation={docsNavigation} />

        <main id='docs-content' className='docs-layout__main'>
          {children}
        </main>

        <aside className='docs-layout__toc'>
          <div className='docs-layout__toc-inner'>
            <span className='docs-layout__toc-label'>On this page</span>

            <nav className='docs-layout__toc-nav' aria-label='On this page'>
              <Link href='#introduction'>Introduction</Link>

              <Link href='#how-it-works'>How GitScope works</Link>

              <Link href='#next-steps'>Next steps</Link>
            </nav>
          </div>
        </aside>
      </div>

      <DocsFooter />
    </div>
  );
};

export default DocsLayout;
