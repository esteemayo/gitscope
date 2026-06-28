import AchievementSkeleton from './AchievementSkeleton';
import CurrentTimeSkeleton from './CurrentTimeSkeleton';
import ProfileStatsSkeleton from './ProfileStatsSkeleton';
import ProfileHeroSkeleton from './ProfileHeroSkeleton';
import ProfileMetaSkeleton from './ProfileMetaSkeleton';
import RepositoryCardSkeleton from './RepositoryCardSkeleton';

const ProfileSkeleton = () => {
  return (
    <main className='profile-client' aria-labelledby='profile-client-title'>
      <div className='profile-client__container'>
        <section className='profile-client__hero' aria-label='Profile Overview'>
          <ProfileHeroSkeleton />

          <div className='profile-client__side'>
            <CurrentTimeSkeleton />

            <ProfileStatsSkeleton />
          </div>
        </section>

        <section
          className='profile-client__meta'
          aria-label='Profile Information'
        >
          <ProfileMetaSkeleton />
        </section>

        <section className='profile-client__achievements'>
          <AchievementSkeleton />
        </section>

        <section className='profile-client__repositories'>
          <RepositoryCardSkeleton />
        </section>
      </div>
    </main>
  );
};

export default ProfileSkeleton;
