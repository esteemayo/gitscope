'use client';

import Achievements from './Achievements';
import ProfileHero from './ProfileHero';
import CurrentTimeCard from './CurrentTimeCard';
import ProfileMeta from './ProfileMeta';
import LatestRepositories from './LatestRepositories';
import ProfileStats from './ProfileStats';

import { getAchievements } from '@/utils/profile/getAchievements';
import { ProfileClientProps } from '@/types/profile/profile.client.type';

import '../../styles/components/profile/ProfileClient.scss';

const ProfileClient = ({ user, repositories }: ProfileClientProps) => {
  const achievements = getAchievements(user, repositories);

  return (
    <main className='profile-client' aria-labelledby='profile-client-title'>
      <div className='profile-client__container'>
        <h1 id='profile-client-title' className='sr-only'>
          GitHub Profiles
        </h1>

        <section className='profile-client__hero' aria-label='Profile Overview'>
          <ProfileHero user={user} />

          <div className='profile-client__side'>
            <CurrentTimeCard location={user.location} />

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
          <Achievements achievements={achievements} />
        </section>

        <section className='profile-client__repositories'>
          <LatestRepositories repositories={repositories} />
        </section>
      </div>
    </main>
  );
};

export default ProfileClient;
