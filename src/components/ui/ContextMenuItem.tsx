import { ContextMenuItemProps } from '@/types/context.menu.item.type';
import '../../styles/components/ContextMenuItem.scss';

const ContextMenuItem = ({
  innerRef,
  icon,
  label,
  onClick,
  onKeyDown,
}: ContextMenuItemProps) => {
  return (
    <li className='context-menu-item'>
      <button
        ref={innerRef}
        type='button'
        onClick={onClick}
        onKeyDown={onKeyDown}
        className='context-menu-item__btn'
        tabIndex={0}
      >
        {icon && icon}
        <span>{label}</span>
      </button>
    </li>
  );
};

export default ContextMenuItem;
