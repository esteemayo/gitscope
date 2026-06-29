import Skeleton from 'react-loading-skeleton';

const ProfileMetaSkeleton = () => {
  return (
    <div className='profile-meta'>
      <div className='profile-meta__container'>
        <Skeleton width={200} height={28} />
        <Skeleton width={300} />

        <div className='profile-meta__grid' style={{ marginTop: 24 }}>
          {[...Array(4)].map((_, index) => (
            <article key={index} className='profile-meta-card'>
              <Skeleton width={45} height={45} borderRadius={12} />

              <div
                className='profile-meta-card__content'
                style={{ width: '100%' }}
              >
                <Skeleton width={90} height={14} />

                <Skeleton width='60%' height={20} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileMetaSkeleton;
