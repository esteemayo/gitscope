import type { Metadata } from 'next';
import SavedUsers from '@/components/savedUsers/SavedUsers';

export const metadata: Metadata = {
  title: 'Saved profiles | GitScope',
  description: 'View and manage your saved GitHub profiles on GitScope.',
  openGraph: {
    title: 'Saved profiles | GitScope',
    description: 'View and manage your saved GitHub profiles on GitScope.',
  },
  twitter: {
    title: 'Saved profiles | GitScope',
    description: 'View and manage your saved GitHub profiles on GitScope.',
  },
};

const SavedPage = () => {
  return <SavedUsers />;
};

export default SavedPage;
