import type { Metadata } from 'next';

import ProfileClient from '@/components/profile/ProfileClient';

import { mockLanguages } from '@/data/profile/mockLanguages';
import { mockUser } from '@/data/profile/mockUser';
import { mockRepositories } from '@/data/profile/mockRepositories';

export const metadata: Metadata = {
  title: 'User profile | GitScope Analytics',
  description:
    'Explore GitHub user profiles and analyze their repositories, contributions, and activity with GitScope Analytics.',
};

const ProfilePage = () => {
  return (
    <ProfileClient
      user={mockUser}
      languages={mockLanguages}
      repositories={mockRepositories}
    />
  );
};

export default ProfilePage;
