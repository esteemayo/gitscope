import type { Metadata } from 'next';
import SavedUsers from '@/components/savedUsers/SavedUsers';

export const metadata: Metadata = {
  title: 'Saved profiles | GitScope',
};

const SavedPage = () => {
  return <SavedUsers />;
};

export default SavedPage;
