import Avatar from './Avatar';
import RepoList from './repos/RepoList';

import { REPOSITORIES } from '@/data';
import { UserDashboardProps } from '@/types/user.dashboard.type';

import '../../styles/components/UserDashboard.scss';

const UserDashboard = ({ label, data }: UserDashboardProps) => {
  return (
    <div className='user-dashboard'>
      <div className='user-dashboard__container'>
        <header className='user-dashboard__header'>
          <Avatar
            imgSrc={data.avatar_url as string}
            alt={`${data.name} avatar`}
            name={data.name}
          />

          <h3 className='user-dashboard__name'>{data.name}</h3>
        </header>

        <div className='user-dashboard__stats'>
          <span>{data.repos} repositories</span>
          <span>{data.followers} followers</span>
        </div>

        <RepoList view='list' repos={REPOSITORIES.slice(0, 4)} />
      </div>

      <small
        className={
          label === 'User A'
            ? 'user-dashboard__label userA'
            : 'user-dashboard__label userB'
        }
      >
        {label}
      </small>
    </div>
  );
};

export default UserDashboard;
