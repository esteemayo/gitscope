import BookmarkIcon from '../icons/BookmarkIcon';
import BookmarkOutlineIcon from '../icons/BookmarkOutlineIcon';

import { SavedButtonProps } from '@/types/saved.button.type';
import '../../styles/components/SavedButton.scss';

const SavedButton = ({ label, isSaved, disabled, onClick }: SavedButtonProps) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className='saved-button'
      disabled={disabled}
      title='Save user profile'
    >
      {isSaved ? <BookmarkIcon /> : <BookmarkOutlineIcon />}
      <span>{isSaved ? 'Saved' : label ?? 'Save'}</span>
    </button>
  );
};

export default SavedButton;
