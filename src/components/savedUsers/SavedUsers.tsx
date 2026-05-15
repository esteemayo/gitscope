import '../../styles/components/SavedUsers.scss';

const SavedUsers = () => {
  return (
    <div className='saved-users'>
      <div className='saved-users__container'>
        <header className='saved-users__header'>
          <h2 className='saved-users__heading'>Saved profiles</h2>
        </header>

        <div className='saved-users__grid'>
          SavedCard
          SavedCard
          SavedCard
        </div>
      </div>
    </div>
  );
};

export default SavedUsers;
