'use client';

import DocsSidebar from '../docs/DocsSidebar';
import DocsFooter from '../docs/DocsFooter';
import DocsTableOfContent from '../docs/DocsTableOfContent';
import DocsHeader from '../docs/DocsHeader';

import { docsTocNavigation } from '@/data/docs/docs-toc.data';
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

        <DocsTableOfContent links={docsTocNavigation} />
      </div>

      <DocsFooter navItems={docsLink} />
    </div>
  );
};

export default DocsRootLayout;
