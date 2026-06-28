import Skeleton from 'react-loading-skeleton';

const RepositoryCardSkeleton = () => {
  return (
    <div className='latest-repositories'>
      <div className='latest-repositories__container'>
        <Skeleton width={200} height={28} />
        <Skeleton width={300} />

        <ul className='latest-repositories__grid' style={{ marginTop: 24 }}>
          {[...Array(3)].map((_, index) => (
            <li key={index} className='latest-repositories__grid--item'>
              <article className='repository-card'>
                <div className='repository-card__container'>
                  <header className='repository-card__header'>
                    <Skeleton width={180} height={26} />

                    <Skeleton width={40} height={40} borderRadius={12} />
                  </header>

                  <div
                    className='repository-card__content'
                    style={{ width: '100%' }}
                  >
                    <Skeleton count={2} />

                    <Skeleton
                      width={120}
                      height={34}
                      borderRadius={100}
                      style={{ marginTop: 20 }}
                    />
                  </div>

                  <footer className='repository-card__footer'>
                    {[...Array(3)].map((_, index) => (
                      <div key={index} className='repository-card__group'>
                        <Skeleton width={16} height={16} />

                        <Skeleton width={55} />
                      </div>
                    ))}
                  </footer>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RepositoryCardSkeleton;
