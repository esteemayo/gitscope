import { type Metadata } from 'next';
import SavedClient from '@/components/saved/SavedClient';

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
  return <SavedClient />;
};

export default SavedPage;
