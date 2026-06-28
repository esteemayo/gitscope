import Skeleton from 'react-loading-skeleton';

const AchievementSkeleton = () => {
  return (
    <div className='achievements'>
      <div className='achievements__container'>
        <Skeleton width={200} height={28} />
        <Skeleton width={300} />

        <div className='achievements__grid' style={{ marginTop: 24 }}>
          {[...Array(4)].map((_, index) => (
            <article key={index} className='achievement-card'>
              <Skeleton width={50} height={50} borderRadius={12} />

              <div
                className='achievement-card__content'
                style={{ width: '100%' }}
              >
                <Skeleton width={180} height={22} />

                <Skeleton count={2} style={{ marginTop: 10 }} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementSkeleton;
