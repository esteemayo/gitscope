'use client';

import ChangeLifecycleStep from './ChangeLifecycleStep';
import { ChangeLifecycleProps } from '@/types/terms/changesToTerms/changes.lifecycle.type';

import '../../../styles/components/terms/changesToTerms/ChangeLifecycle.scss';

const ChangeLifecycle = ({ lifecycle }: ChangeLifecycleProps) => {
  return (
    <section
      className='change-lifecycle'
      aria-labelledby='change-lifecycle-title'
    >
      <header className='change-lifecycle__header'>
        <div className='change-lifecycle__heading'>
          <span className='change-lifecycle__heading--label'>
            Revision process
          </span>

          <h3
            id='change-lifecycle-title'
            className='change-lifecycle__heading--title'
          >
            How updated Terms move into effect
          </h3>
        </div>

        <p className='change-lifecycle__paragraph'>
          A clear sequence helps communicate how updates are reviewed,
          published, and applied.
        </p>
      </header>

      <div className='change-lifecycle__steps'>
        {lifecycle.map((lifecycleStep, index) => (
          <ChangeLifecycleStep
            key={lifecycleStep.id}
            {...lifecycleStep}
            index={index}
            isLast={index === lifecycle.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default ChangeLifecycle;
