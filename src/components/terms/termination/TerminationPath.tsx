'use client';

import TerminationPathItem from './TerminationPathItem';
import { TerminationPathProps } from '@/types/terms/termination/termination.path.type';

import '../../../styles/components/terms/termination/TerminationPath.scss';

const TerminationPath = ({ paths }: TerminationPathProps) => {
  return (
    <section
      className='termination-path'
      aria-labelledby='termination-path-title'
    >
      <header className='termination-path__header'>
        <span className='termination-path__header--label'>
          Termination authority
        </span>

        <h3
          id='termination-path-title'
          className='termination-path__header--title'
        >
          How the service relationship may end
        </h3>
      </header>

      <div className='termination-path__grid'>
        {paths.map((path, index) => (
          <TerminationPathItem key={path.id} {...path} index={index} />
        ))}
      </div>
    </section>
  );
};

export default TerminationPath;
