import { ChartsPreviewProps } from '@/types/about/features/previews/charts.preview.type';
import '../../../../styles/components/about/features/previews/ChartsPreview.scss';

const ChartsPreview = ({ points }: ChartsPreviewProps) => {
  const max = Math.max(...points.map((point) => point.value));

  const path = points
    .map((point, index) => {
      const x = (index / (points.length - 1)) * 100;
      const y = 100 - (point.value / max) * 100;

      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
    })
    .join(' ');

  const areaPath = `${path} L 100 100 L 0 100 Z`;

  return (
    <div className='charts-preview'>
      <svg viewBox='0 0 100 100' className='charts-preview__chart'>
        <path d={areaPath} className='charts-preview__area' />

        <path d={path} className='charts-preview__line' />

        {points.map((point, index) => {
          const { id, value } = point;

          const x = (index / (points.length - 1)) * 100;
          const y = 100 - (value / max) * 100;

          return (
            <circle
              key={id}
              cx={x}
              cy={y}
              r='2'
              className='charts-preview__point'
            />
          );
        })}
      </svg>

      <div className='charts-preview__metrics'>
        <div className='charts-preview__metric'>
          <small className='charts-preview__metric--label'>Growth</small>

          <strong className='charts-preview__metric--value'>+24%</strong>
        </div>

        <div className='charts-preview__metric'>
          <small className='charts-preview__metric--label'>Commits</small>

          <strong className='charts-preview__metric--value'>1.8K</strong>
        </div>

        <div className='charts-preview__metric'>
          <small className='charts-preview__metric--label'>Contributors</small>

          <strong className='charts-preview__metric--value'>18</strong>
        </div>
      </div>
    </div>
  );
};

export default ChartsPreview;
