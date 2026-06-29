import Skeleton from 'react-loading-skeleton';

const CurrentTimeSkeleton = () => {
  return (
    <aside className='current-time-card'>
      <div className='current-time-card__container'>
        <div className='current-time-card__header'>
          <Skeleton width={48} height={48} borderRadius={12} />

          <div className='current-time-card__content'>
            <Skeleton width={140} height={22} />

            <Skeleton width={90} height={16} style={{ marginTop: 8 }} />
          </div>
        </div>

        <div className='current-time-card__body'>
          <Skeleton width={180} height={36} />

          <Skeleton
            width={120}
            height={36}
            borderRadius={100}
            style={{ marginTop: 24 }}
          />
        </div>

        <footer className='current-time-card__footer'>
          <Skeleton width={80} height={18} />

          <Skeleton width={60} height={18} />
        </footer>
      </div>
    </aside>
  );
};

export default CurrentTimeSkeleton;
