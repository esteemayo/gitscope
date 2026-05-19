import ArrowDownIcon from '../icons/ArrowDownIcon';
import { DropdownButtonProps } from '@/types/dropdown.button.type';

import '../../styles/components/DropdownButton.scss';

const DropdownButton = ({ isOpen, label, onToggle }: DropdownButtonProps) => {
  return (
    <button
      type='button'
      onClick={onToggle}
      className={isOpen ? 'dropdown-button active' : 'dropdown-button'}
    >
      <span className='dropdown-button__label'>
        {label}
      </span>

      <ArrowDownIcon />
    </button>
  );
};

export default DropdownButton;
