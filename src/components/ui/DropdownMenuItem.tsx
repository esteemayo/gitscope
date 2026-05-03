import { DropdownMenuItemProps } from '@/types/dropdown.menu.item';
import '../../styles/components/DropdownMenuItem.scss';

const DropdownMenuItem = ({
  id,
  ref,
  label,
  index,
  onSort,
  onKeyDown,
}: DropdownMenuItemProps) => {
  return (
    <li className='dropdown-menu-item'>
      <button
        ref={ref}
        type='button'
        onClick={() => onSort(id)}
        onKeyDown={(e) => onKeyDown(e, index)}
      >
        {label}
      </button>
    </li>
  );
};

export default DropdownMenuItem;
