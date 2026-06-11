import EmptyState from '../ui/EmptyState';
import { LanguageData } from '@/types/repo/index';

import '../../styles/components/repo/LanguageChart.scss';

const LanguageChart = ({ languages }: { languages: LanguageData[] }) => {
  if (!languages.length) {
    return (
      <EmptyState
        title='No Language Data'
        description='Programming language statistics are not available for this repository.'
      />
    );
  }

  return (
    <div className='language-chart'>
      <div className='language-chart__bar'>
        {languages.map((language) => {
          const { name, color, percentage } = language;

          return (
            <span
              key={name}
              style={{
                width: `${percentage}%`,
                backgroundColor: color,
              }}
            />
          );
        })}
      </div>

      <div className='language-chart__legend'>
        {languages.map((language) => {
          const { name, color, percentage } = language;

          return (
            <div key={name} className='language-chart__item'>
              <span style={{ backgroundColor: color }} />

              <strong>{name}</strong>

              <small>{percentage}%</small>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LanguageChart;
