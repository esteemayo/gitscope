import Avatar from './Avatar';
import RepoList from './RepoList';

import '../../styles/components/UserDashboard.scss';

const UserDashboard = () => {
  return (
    <div className='user-dashboard'>
      <div className='user-dashboard__container'>
        <header className='user-dashboard__header'>
          <Avatar />
          <h3 className='user-dashboard__name'>Emmanuel Adebayo</h3>
        </header>

        <div className='user-dashboard__stats'>
          <span>200 repositories</span>
          <span>44 followers</span>
        </div>

        <RepoList view='list' />
      </div>
    </div>
  );
};

export default UserDashboard;
