import { ChartProps } from '@/types/chart.type';
import '../styles/components/Chart.scss';

const Chart = ({ title, children }: ChartProps) => {
  return (
    <div className='chart'>
      <header className='chart__header'>
        <h2 className='chart__heading'>{title}</h2>
      </header>

      <div className='chart__container'>{children}</div>
    </div>
  );
};

export default Chart;
