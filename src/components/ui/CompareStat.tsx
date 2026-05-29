import { compareValues } from '@/utils/compare';
import { CompareStatProps } from '@/types/compare.stat.type';

import '../../styles/components/CompareStat.scss';

const CompareStat = ({ label, valueA, valueB }: CompareStatProps) => {
  const { winner, diff } = compareValues(valueA, valueB);

  const total = valueA + valueB || 1;
  const aWidth = (valueA / total) * 100;

  return (
    <div className='compare-stat'>
      <p className='compare-stat__label'>{label}</p>
      <div className='compare-stat__values'>
        <strong
          className={
            winner === 'A'
              ? 'compare-stat__values--value win'
              : 'compare-stat__values--value'
          }
        >
          {valueA} {winner === 'A' && '👑'}
        </strong>

        <span className='compare-stat__values--versus'>vs</span>

        <strong
          className={
            winner === 'B'
              ? 'compare-stat__values--value win'
              : 'compare-stat__values--value'
          }
        >
          {valueB} {winner === 'B' && '👑'}
        </strong>
      </div>

      <div className='compare-stat__bar'>
        <div
          className='compare-stat__bar--fill'
          style={{ width: `${aWidth}%` }}
        />
      </div>

      {winner !== 'tie' && (
        <span className='compare-stat__diff'>
          {winner} leads by {diff}%
        </span>
      )}
    </div>
  );
};

export default CompareStat;
