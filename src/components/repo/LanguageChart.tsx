import EmptyState from '../ui/EmptyState';

import LanguageChartBar from './LanguageChartBar';
import LanguageChartItem from './LanguageChartItem';

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
      <LanguageChartBar languages={languages} />

      <div className='language-chart__legend'>
        {languages.map((language) => (
          <LanguageChartItem key={language.name} {...language} />
        ))}
      </div>
    </div>
  );
};

export default LanguageChart;
