import DropdownMenu from './DropdownMenu';
import DropdownOptions from './DropdownOptions';

import { RepositoryDropdownProps } from '@/types/dashboard/repository/repository.dropdown.type';

const RepositoryDropdown = ({
  value,
  label,
  isOpen,
  options,
  onToggle,
  onChange,
  ariaLabel,
}: RepositoryDropdownProps) => {
  return (
    <DropdownMenu
      label={label}
      isOpen={isOpen}
      onToggle={onToggle}
      ariaLabel={ariaLabel}
    >
      <DropdownOptions
        label='Repository type'
        value={value}
        options={options}
        onChange={onChange}
      />
    </DropdownMenu>
  );
};

export default RepositoryDropdown;
