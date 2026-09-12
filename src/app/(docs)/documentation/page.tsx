import type { Metadata } from 'next';
import DocsHome from '@/components/docs/home/DocsHome';

export const metadata: Metadata = {
  title: 'Documentation | GitScope',
};

const DocsPage = () => {
  return <DocsHome />;
};

export default DocsPage;
