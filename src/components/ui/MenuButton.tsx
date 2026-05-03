import ArrowDownIcon from '../icons/ArrowDownIcon';
import { MenuButtonProps } from '@/types/menu.button.type';

import '../../styles/components/MenuButton.scss';

const MenuButton = ({ isOpen, sort, onOpen }: MenuButtonProps) => {
  return (
    <button
      type='button'
      onClick={() => onOpen((prev) => !prev)}
      className={isOpen ? 'menu-button active' : 'menu-button'}
    >
      <label>{sort}</label>
      <ArrowDownIcon />
    </button>
  );
};

export default MenuButton;
