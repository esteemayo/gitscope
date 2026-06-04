import { TrophyIcon } from '../icons/TrophyIcon';
import StarIcon from '../icons/StarIcon';
import { ActivityIcon } from '../icons/ActivityIcon';

import { ProfileLeaderBadgeProps } from '@/types/compare/profile.leader.badge.type';
import '../../styles/components/ProfileLeaderBadge.scss';

const badgeConfig = {
  repositories: {
    icon: <TrophyIcon />,
    label: 'Leads in Repositories',
  },
  followers: {
    icon: <StarIcon />,
    label: 'Most Followers',
  },
  activity: {
    icon: <ActivityIcon />,
    label: 'Most Active',
  },
};

const ProfileLeaderBadge = ({ variant }: ProfileLeaderBadgeProps) => {
  const { icon, label } = badgeConfig[variant];

  return (
    <div className='profile-leader-badge'>
      {icon}
      <span className='profile-leader-badge__label'>{label}</span>
    </div>
  );
};

export default ProfileLeaderBadge;
