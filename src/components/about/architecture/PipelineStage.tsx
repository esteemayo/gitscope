import { ArrowRight, Check } from 'lucide-react';
import { PipelineStageProps } from '@/types/about/architecture/pipeline.stage.type';

import '../../../styles/components/about/architecture/PipelineStage.scss';

const PipelineStage = ({
  stage: { icon: Icon, title, description, accentColor, items, cardWidth },
  index,
  isActive = false,
}: PipelineStageProps) => {
  return (
    <div className='pipeline-stage'>
      <div className='pipeline-stage__marker'>
        <div
          className='pipeline-stage__number'
          style={
            {
              '--accent-color': accentColor,
            } as React.CSSProperties
          }
        >
          <span className='pipeline-stage__number--label'>step</span>
          <strong className='pipeline-stage__number--value'>
            {String(index + 1).padStart(2, '0')}
          </strong>
        </div>
      </div>

      <article
        className={
          isActive
            ? 'pipeline-stage__stage active'
            : cardWidth
              ? `pipeline-stage__stage ${cardWidth}`
              : 'pipeline-stage__stage'
        }
        style={
          {
            '--accent-color': accentColor,
          } as React.CSSProperties
        }
      >
        <div className='pipeline-stage__header'>
          <div className='pipeline-stage__icon'>
            <Icon size={28} />
          </div>

          <div className='pipeline-stage__content'>
            <h3 className='pipeline-stage__content--title'>{title}</h3>

            <p className='pipeline-stage__content--description'>
              {description}
            </p>
          </div>
        </div>

        <div className='pipeline-stage__divider' />

        <ul className='pipeline-stage__list'>
          {items.map((item) => {
            const { id, label } = item;

            return (
              <li key={id} className='pipeline-stage__item'>
                <Check
                  size={16}
                  strokeWidth={2.5}
                  className='pipeline-stage__item--check'
                />

                <span className='pipeline-stage__item--label'>{label}</span>
              </li>
            );
          })}
        </ul>

        <ArrowRight size={18} className='pipeline-stage__arrow' />

        {isActive && (
          <footer className='pipeline-stage__footer'>
            <div className='pipeline-stage__group'>
              <strong className='pipeline-stage__group--value'>5</strong>

              <span className='pipeline-stage__group--label'>
                Analytics Modules
              </span>
            </div>

            <div className='pipeline-stage__group'>
              <strong className='pipeline-stage__group--value'>50+</strong>

              <span className='pipeline-stage__group--label'>
                Repository Metrics
              </span>
            </div>

            <div className='pipeline-stage__group'>
              <strong className='pipeline-stage__group--value'>Live</strong>

              <span className='pipeline-stage__group--label'>
                Real-time Processing
              </span>
            </div>
          </footer>
        )}
      </article>
    </div>
  );
};

export default PipelineStage;
