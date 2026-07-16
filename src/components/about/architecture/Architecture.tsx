import ArchitectureCard from './ArchitectureCard';
import { ArchitectureProps } from '@/types/about/architecture/architecture.type';

import '../../../styles/components/about/architecture/Architecture.scss';

const Architecture = ({
  badge,
  title,
  description,
  features,
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

        <div className='architecture__diagram'>Architecture Diagram</div>
      </div>
    </section>
  );
};

export default Architecture;
