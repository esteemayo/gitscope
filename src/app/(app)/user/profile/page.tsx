import type { Metadata } from 'next';

import ProfileClient from '@/components/profile/ProfileClient';
import { mockRepositories, mockUser } from '@/data/profile';

export const metadata: Metadata = {
  title: 'User profile | GitScope',
};

const ProfilePage = () => {
  return <ProfileClient user={mockUser} repositories={mockRepositories} />;
};

export default ProfilePage;
