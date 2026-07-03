import Skeleton from 'react-loading-skeleton';

const ActivityCardSkeleton = () => {
  return (
    <article className='activity-card' aria-hidden='true'>
      <div className='activity-card__container'>
        <header className='activity-card__header'>
          <div className='activity-card__heading'>
            <Skeleton width={44} height={44} borderRadius={12} />

            <Skeleton width={120} height={18} />
          </div>

          <div className='activity-card__trend'>
            <Skeleton width={48} height={18} />

            <Skeleton width={72} height={14} />
          </div>
        </header>

        <div className='activity-card__content'>
          <Skeleton width='70%' height={42} />

          <Skeleton width='60%' height={16} />
        </div>
      </div>
    </article>
  );
};

export default ActivityCardSkeleton;
