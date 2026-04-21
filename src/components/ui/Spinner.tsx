import { SpinnerProps } from '@/types/spinner.type';
import '../../styles/components/Spinner.scss';

const Spinner = ({ size = 'sm', variant = 'light-blue' }: SpinnerProps) => {
  return <div className={`spinner ${size} ${variant}`} />;
};

export default Spinner;
