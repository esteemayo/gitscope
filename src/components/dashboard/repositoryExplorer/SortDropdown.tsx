import DropdownMenu from './DropdownMenu';
import DropdownOptions from './DropdownOptions';

import { SortDropdownProps } from '@/types/dashboard/repository/sort.dropdown.type';

const SortDropdown = ({
  label,
  isOpen,
  value,
  options,
  icon,
  type,
  onToggle,
  onChange,
  ariaLabel,
}: SortDropdownProps) => {
  return (
    <DropdownMenu
      label={label}
      isOpen={isOpen}
      icon={icon}
      type={type}
      onToggle={onToggle}
      ariaLabel={ariaLabel}
    >
      <DropdownOptions
        label='Sort by'
        value={value}
        options={options}
        onChange={onChange}
      />
    </DropdownMenu>
  );
};

export default SortDropdown;
