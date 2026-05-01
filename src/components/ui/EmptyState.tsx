import '../../styles/components/EmptyState.scss';

const EmptyState = () => {
  return (
    <div className='empty-state' role='alert'>
      <h3 className='empty-state__title'>
        No repositories found for this user.
      </h3>

      <span className='empty-state__desc'>
        Try another username or check availability.
      </span>
    </div>
  );
};

export default EmptyState;
