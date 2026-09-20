'use client';

import DocsSidebar from '../docs/DocsSidebar';
import DocsFooter from '../docs/DocsFooter';
import DocsTableOfContents from '../docs/DocsTableOfContents';
import DocsHeader from '../docs/DocsHeader';

import { docsLink } from '@/data/docs/docs-footer.data';
import { docsNavigation } from '@/data/docs/docs-navigation.data';

import '../../styles/components/docs/DocsRootLayout.scss';

const DocsRootLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className='docs-root-layout'>
      <DocsHeader />

      <div className='docs-root-layout__body'>
        <DocsSidebar navigation={docsNavigation} />

        <div id='docs-content' className='docs-root-layout__main'>
          {children}
        </div>

        <div className='docs-root-layout__toc'>
          <DocsTableOfContents />
        </div>
      </div>

      <DocsFooter navItems={docsLink} />
    </div>
  );
};

export default DocsRootLayout;
