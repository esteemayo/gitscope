import { LanguageChartItemProps } from '@/types/repo/language.chart.item.type';
import '../../styles/components/repo/LanguageChartItem.scss';

const LanguageChartItem = ({
  name,
  color,
  percentage,
}: LanguageChartItemProps) => {
  return (
    <div key={name} className='language-chart-item'>
      <span style={{ backgroundColor: color }} />

      <strong>{name}</strong>

      <small>{percentage}%</small>
    </div>
  );
};

export default LanguageChartItem;
