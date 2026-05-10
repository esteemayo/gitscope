import { CompareStatProps } from '@/types/compare.stat.type';
import '../../styles/components/CompareStat.scss';

const CompareStat = ({ label, value }: CompareStatProps) => {
  return (
    <div className='compare-stat win'>
      <p className='compare-stat__label'>{label}</p>
      <strong className='compare-stat__count'>{value}</strong>
    </div>
  );
};

export default CompareStat;
