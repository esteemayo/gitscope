import { ActionButtonProps } from '@/types/ui/action.button.type';
import '../../styles/components/ui/ActionButton.scss';

const ActionButton = ({
  ref,
  icon,
  label,
  title,
  disabled,
  onClick,
  onKeyDown,
}: ActionButtonProps) => {
  return (
    <button
      ref={ref}
      type='button'
      onClick={onClick}
      onKeyDown={onKeyDown}
      className='action-button'
      disabled={disabled}
      title={title}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

export default ActionButton;
