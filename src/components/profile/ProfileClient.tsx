import Achievements from './Achievements';
import ProfileHero from './ProfileHero';
import CurrentTimeCard from './CurrentTimeCard';
import ProfileMeta from './ProfileMeta';
import LatestRepositories from './LatestRepositories';
import ProfileStats from './ProfileStats';

import { ProfileClientProps } from '@/types/profile/profile.client.type';
import '../../styles/components/profile/ProfileClient.scss';

const ProfileClient = ({
  user,
  achievements,
  repositories,
}: ProfileClientProps) => {
  return (
    <main className='profile-client' aria-labelledby='profile-client-title'>
      <div className='profile-client__container'>
        <h1 id='profile-client-title' className='sr-only'>
          GitHub Profiles
        </h1>

        <section className='profile-client__hero' aria-label='Profile Overview'>
          <ProfileHero user={user} />

          <div className='profile-client__side'>
            <CurrentTimeCard />

            <ProfileStats user={user} />
          </div>
        </section>

        <section
          className='profile-client__meta'
          aria-label='Profile Information'
        >
          <ProfileMeta user={user} />
        </section>

        <section className='profile-client__achievements'>
          <Achievements />
        </section>

        <section className='profile-client__repositories'>
          <LatestRepositories repositories={repositories} />
        </section>
      </div>
    </main>
  );
};

export default ProfileClient;
