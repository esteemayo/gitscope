import UserAvatar from './UserAvatar';

import { GitHubUserPreview } from '@/types/compare';
import { getAvatarColor } from '@/utils/avatarColors';

import '../../styles/components/UserBadge.scss';

type CustomCSSProperties = React.CSSProperties & {
  '--accent-color': string;
};

interface UserBadgeProps {
  user: GitHubUserPreview;
}

const UserBadge = ({ user }: UserBadgeProps) => {
  const displayName = user.name || user.login;
  const accentColor = getAvatarColor(displayName);

  return (
    <article
      className='user-badge'
      style={
        {
          '--accent-color': accentColor,
        } as CustomCSSProperties
      }
    >
      <div className='user-badge__container'>
        <UserAvatar
          src={user.avatar_url}
          name={displayName}
          size={40}
          alt={user.login}
          fallback='icon'
        />

        <div className='user-badge__content'>
          <h3 className='user-badge__content--name'>{displayName}</h3>

          <p className='user-badge__content--username'>@{user.login}</p>
        </div>
      </div>
    </article>
  );
};

export default UserBadge;
