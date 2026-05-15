import CheckIcon from '../icons/CheckIcon';
import ClipboardIcon from '../icons/ClipboardIcon';

import { CopyButtonProps } from '@/types/copy.button.type';
import '../../styles/components/CopyButton.scss';

const CopyButton = ({ isCopied, disabled, onClick }: CopyButtonProps) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className='copy-button'
      disabled={disabled}
      title='Copy profile url'
    >
      {isCopied ? <CheckIcon /> : <ClipboardIcon />}
      <span>{isCopied ? 'Copied' : 'Copy'}</span>
    </button>
  );
};

export default CopyButton;
