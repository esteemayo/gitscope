import Skeleton from 'react-loading-skeleton';

const ProfileStatsSkeleton = () => {
  return (
    <div className='profile-stats'>
      <div className='profile-stats__container'>
        {[...Array(4)].map((_, index) => (
          <article key={index} className='profile-metric'>
            <Skeleton width={48} height={48} borderRadius={12} />

            <div className='profile-metric__content'>
              <Skeleton width={90} height={32} />

              <Skeleton width={80} height={16} style={{ marginTop: 8 }} />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ProfileStatsSkeleton;
