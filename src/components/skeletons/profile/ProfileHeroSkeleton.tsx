import Skeleton from 'react-loading-skeleton';

const ProfileHeroSkeleton = () => {
  return (
    <header className='profile-hero'>
      <div className='profile-hero__container'>
        <div className='profile-hero__avatar' style={{ marginBottom: 24 }}>
          <Skeleton circle width={150} height={150} />
        </div>

        <div className='profile-hero__content'>
          <Skeleton width={240} height={34} />

          <Skeleton width={120} height={18} style={{ marginTop: 12 }} />

          <Skeleton width={700} count={2} style={{ marginTop: 20 }} />

          <Skeleton
            width={180}
            height={36}
            borderRadius={100}
            style={{ marginTop: 24 }}
          />
        </div>
      </div>
    </header>
  );
};

export default ProfileHeroSkeleton;
