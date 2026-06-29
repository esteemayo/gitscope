import { LanguageChartProps } from '@/types/profile/language/language.chart.type';
import '../../../styles/components/profile/languageDistribution/LanguageChart.scss';

const LanguageChart = ({ languages }: LanguageChartProps) => {
  return (
    <div className='language-chart'>
      <div className='language-chart__container' aria-hidden='true'>
        Chart goes here
      </div>
    </div>
  );
};

export default LanguageChart;
