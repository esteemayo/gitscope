import { InputProps } from '@/types/input.type';
import '../../styles/components/Input.scss';

const Input = ({ ref, ...props }: InputProps) => {
  return <input {...props} ref={ref} className='input' />;
};

export default Input;
