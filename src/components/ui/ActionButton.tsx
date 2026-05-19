import { ActionButtonProps } from '@/types/action.button.type';
import '../../styles/components/ActionButton.scss';

const ActionButton = ({
  icon,
  label,
  title,
  disabled,
  onClick,
  onKeyDown,
  innerRef,
}: ActionButtonProps) => {
  return (
    <button
      ref={innerRef}
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
