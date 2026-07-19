import { ArrowRight, Check } from 'lucide-react';
import { PipelineStageProps } from '@/types/about/architecture/pipeline.stage.type';

import '../../../styles/components/about/architecture/PipelineStage.scss';

const PipelineStage = ({
  stage: { icon: Icon, title, description, accentColor, items },
  isActive,
}: PipelineStageProps) => {
  return (
    <article
      className={isActive ? 'pipeline-stage active' : 'pipeline-stage'}
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

          <p className='pipeline-stage__content--description'>{description}</p>
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
    </article>
  );
};

export default PipelineStage;
