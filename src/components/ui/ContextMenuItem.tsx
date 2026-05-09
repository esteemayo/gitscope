import { ContextMenuItemProps } from '@/types/context.menu.item.type';
import '../../styles/components/ContextMenuItem.scss';

const ContextMenuItem = ({ icon, label, onClick, onKeyDown }: ContextMenuItemProps) => {
  return (
    <li className='context-menu-item'>
      <button
        type='button'
        onClick={onClick}
        onKeyDown={onKeyDown}
        className='context-menu-item__btn'
      >
        {icon && icon}
        <span>{label}</span>
      </button>
    </li>
  );
};

export default ContextMenuItem;
