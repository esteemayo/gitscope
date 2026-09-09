import type { Metadata } from 'next';
import DocsClient from '@/components/docs/DocsClient';

export const metadata: Metadata = {
  title: 'Documentation | GitScope',
};

const page = () => {
  return <DocsClient />;
};

export default page;
