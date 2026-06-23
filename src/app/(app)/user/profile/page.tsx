import ProfileClient from '@/components/profile/ProfileClient';
import { mockAchievement, mockRepositories, mockUser } from '@/data/profile';

const ProfilePage = () => {
  return (
    <ProfileClient
      user={mockUser}
      achievements={mockAchievement}
      repositories={mockRepositories}
    />
  );
};

export default ProfilePage;
