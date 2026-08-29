'use client';

import ThirdPartyBoundaryItem from './ThirdPartyBoundaryItem';
import { ThirdPartyBoundaryProps } from '@/types/terms/thirdPartyServices/third.party.boundary.type';

import '../../../styles/components/terms/thirdPartyServices/ThirdPartyBoundary.scss';

const ThirdPartyBoundary = ({ boundaries }: ThirdPartyBoundaryProps) => {
  return (
    <section
      className='third-party-boundary'
      aria-labelledby='third-party-boundary-title'
    >
      <header className='third-party-boundary__header'>
        <span className='third-party-boundary__header--label'>
          Responsibility boundary
        </span>

        <h3
          id='third-party-boundary-title'
          className='third-party-boundary__header--title'
        >
          What GitScope controls <br />
          and what remains external
        </h3>
      </header>

      <div className='third-party-boundary__line'>
        <span className='third-party-boundary__line--endpoint'>GitScope</span>

        <span className='third-party-boundary__line--rule' aria-hidden='true' />

        <span className='third-party-boundary__line--endpoint'>Provider</span>
      </div>

      <div className='third-party-boundary__items'>
        {boundaries.map((boundary, index) => (
          <ThirdPartyBoundaryItem
            key={boundary.title}
            {...boundary}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default ThirdPartyBoundary;
