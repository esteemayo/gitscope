import SectionHeader from '../ui/SectionHeader';
import UserIcon from '../icons/UserIcon';
import UserDashboard from '../dashboard/UserDashboard';

import '../../styles/components/CompareProfiles.scss';

const CompareProfiles = () => {
  return (
    <section className='compare-profiles'>
      <SectionHeader
        icon={<UserIcon />}
        title='Developer profiles'
        description='Side-by-side GitHub profile comparison'
      />

      <div className='compare-profiles__grid'>
        <UserDashboard
          label='User A'
          data={{
            name: 'Emmanuel Adebayo',
            login: 'esteemayo',
            avatar_url: '/avatar-2.jpg',
            repos: 200,
            followers: 14,
          }}
        />

        <UserDashboard
          label='User B'
          data={{
            name: 'Brittany Chiang',
            login: 'brittany',
            repos: 420,
            followers: 1000,
          }}
        />
      </div>
    </section>
  );
};

export default CompareProfiles;
