import { HealthPreviewProps } from '@/types/about/features/previews/health.preview.type';
import '../../../../styles/components/about/features/previews/HealthPreview.scss';

const HealthPreview = ({
  score,
  activeIssues,
  lastCommit,
}: HealthPreviewProps) => {
  return (
    <div className='health-preview'>
      <div className='health-preview__header'>
        <span className='health-preview__label'>Repository health</span>

        <strong className='health-preview__score'>{score}%</strong>
      </div>

      <div className='health-preview__progress'>
        <span
          className='health-preview__progress--fill'
          style={{ width: `${score}%` }}
        />
      </div>

      <div className='health-preview__stats'>
        <div className='health-preview__stat'>
          <small className='health-preview__stat--label'>Issues</small>

          <strong className='health-preview__stat--value'>
            {activeIssues}
          </strong>
        </div>

        <div className='health-preview__stat'>
          <small className='health-preview__stat--label'>Last commit</small>

          <strong className='health-preview__stat--value'>{lastCommit}</strong>
        </div>
      </div>
    </div>
  );
};

export default HealthPreview;
