import millify from 'millify';
import { AnalyticsPreviewProps } from '@/types/about/features/previews/analytics.preview.type';

import '../../../../styles/components/about/features/previews/AnalyticsPreview.scss';

const AnalyticsPreview = ({ stars, forks }: AnalyticsPreviewProps) => {
  return (
    <div className='analytics-preview'>
      <div className='analytics-preview__metrics'>
        <div className='analytics-preview__metric'>
          <small className='analytics-preview__metric--label'>Stars</small>

          <strong className='analytics-preview__metric--value'>
            {millify(stars)}
          </strong>
        </div>

        <div className='analytics-preview__metric'>
          <small className='analytics-preview__metric--label'>Forks</small>

          <strong className='analytics-preview__metric--value'>
            {millify(forks)}
          </strong>
        </div>
      </div>

      <div className='analytics-preview__chart'>
        <span className='analytics-preview__chart--bar' />

        <span className='analytics-preview__chart--bar' />

        <span className='analytics-preview__chart--bar' />

        <span className='analytics-preview__chart--bar' />

        <span className='analytics-preview__chart--bar' />

        <span className='analytics-preview__chart--bar' />
      </div>
    </div>
  );
};

export default AnalyticsPreview;
