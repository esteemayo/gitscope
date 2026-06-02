import UserAvatar from './UserAvatar';
import { GitHubUserPreview } from '@/types/compare';

import '../../styles/components/UserBadge.scss';

interface UserBadgeProps {
  user: GitHubUserPreview;
}

const UserBadge = ({ user }: UserBadgeProps) => {
  return (
    <article className='user-badge'>
      <div className='user-badge__container'>
        <UserAvatar
          src={user.avatar_url}
          name={user.name!}
          size={40}
          alt={user.login}
        />

        <div className='user-badge__content'>
          <h3 className='user-badge__name'>{user.name || user.login}</h3>

          <p className='user-badge__username'>@{user.login}</p>
        </div>
      </div>
    </article>
  );
};

export default UserBadge;
