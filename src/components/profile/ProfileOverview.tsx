import ProfileMeta from './ProfileMeta';
import CurrentTimeCard from './CurrentTimeCard';

import CurrentTimeSkeleton from '../skeletons/profile/CurrentTimeSkeleton';
import ProfileMetaSkeleton from '../skeletons/profile/ProfileMetaSkeleton';

import { ProfileOverviewProps } from '@/types/profile/profile.overview.type';
import '../../styles/components/profile/ProfileOverview.scss';

const ProfileOverview = ({ user, isLoading }: ProfileOverviewProps) => {
  return (
    <div className='profile-overview'>
      {isLoading ? <ProfileMetaSkeleton /> : <ProfileMeta user={user} />}

      {isLoading ? (
        <CurrentTimeSkeleton />
      ) : (
        <CurrentTimeCard location={user.location} />
      )}
    </div>
  );
};

export default ProfileOverview;
