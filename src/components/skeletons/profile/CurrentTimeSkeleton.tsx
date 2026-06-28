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

          <div className='current-time-card__timezone'>
            <Skeleton circle width={16} height={16} />

            <Skeleton width={80} height={18} />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default CurrentTimeSkeleton;
