import Pipeline from './Pipeline';
import ArchitectureCard from './ArchitectureCard';

import { ArchitectureProps } from '@/types/about/architecture/architecture.type';
import '../../../styles/components/about/architecture/Architecture.scss';

const Architecture = ({
  badge,
  title,
  description,
  features,
  stages,
}: ArchitectureProps) => {
  return (
    <section className='architecture'>
      <div className='architecture__container'>
        <header className='architecture__header'>
          <span className='architecture__header--badge'>{badge}</span>

          <h2 className='architecture__header--title'>{title}</h2>

          <p className='architecture__header--description'>{description}</p>
        </header>

        <div className='architecture__grid'>
          {features.map((feature) => (
            <ArchitectureCard key={feature.id} feature={feature} />
          ))}
        </div>

        <div className='architecture__pipeline-section'>
          <div className='architecture__pipeline-header'>
            <span className='architecture__pipeline-badge'>
              System pipeline
            </span>

            <h3 className='architecture__pipeline-title'>
              How GitScope transforms GitHub data
            </h3>

            <p className='architecture__pipeline-description'>
              Every request follows a streamlined pipeline, from data collection
              to interactive visualizations, ensuring fast, reliable and
              meaningful insights.
            </p>
          </div>

          <Pipeline stages={stages} />
        </div>
      </div>
    </section>
  );
};

export default Architecture;
