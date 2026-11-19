import DropdownMenu from './DropdownMenu';
import DropdownOptions from './DropdownOptions';

import { StarsDropdownProps } from '@/types/dashboard/repository/stars.dropdown.type';

const StarsDropdown = ({
  value,
  label,
  isOpen,
  options,
  onToggle,
  onChange,
  ariaLabel,
}: StarsDropdownProps) => {
  return (
    <DropdownMenu
      label={label}
      isOpen={isOpen}
      onToggle={onToggle}
      ariaLabel={ariaLabel}
    >
      <DropdownOptions
        label='Star count'
        value={value}
        options={options}
        onChange={onChange}
      />
    </DropdownMenu>
  );
};

export default StarsDropdown;
