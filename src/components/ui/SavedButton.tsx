import BookmarkIcon from '../icons/BookmarkIcon';
import { SavedButtonProps } from '@/types/saved.button.type';

import '../../styles/components/SavedButton.scss';

const SavedButton = ({ label, disabled, onClick }: SavedButtonProps) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className='saved-button'
      disabled={disabled}
      title='Save user profile'
    >
      <BookmarkIcon />
      <span>{label ?? 'Save'}</span>
    </button>
  );
};

export default SavedButton;
