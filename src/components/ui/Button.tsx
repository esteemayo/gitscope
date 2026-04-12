import { ButtonProps } from '@/types/button.type';
import '../../styles/components/Button.scss';

const Button = ({
  type = 'button',
  disabled,
  children,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className='button'
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
