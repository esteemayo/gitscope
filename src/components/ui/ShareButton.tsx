import ShareIcon from '../icons/ShareIcon';
import { ShareButtonProps } from '@/types/share.button.type';

import '../../styles/components/ShareButton.scss';

const ShareButton = ({ label, disabled, onClick }: ShareButtonProps) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className='share-button'
      disabled={disabled}
      title='Share profile url'
    >
      <ShareIcon />
      <span>{label ?? 'Share'}</span>
    </button>
  );
};

export default ShareButton;
