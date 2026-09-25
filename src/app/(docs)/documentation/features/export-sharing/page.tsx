import type { Metadata } from 'next';
import ExportSharingClient from '@/components/docs/ExportSharingClient';

export const metadata: Metadata = {
  title: 'Export & Sharing | GitScope Documentation',
  description:
    'Learn about the export and sharing feature in Gitscope, which allows you to easily share your insights and findings with others.',
};

const ExportSharingPage = () => {
  return <ExportSharingClient />;
};

export default ExportSharingPage;
