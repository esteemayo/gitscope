'use client';

import ResponseExpectationItem from './ResponseExpectationItem';
import { ResponseExpectationsProps } from '@/types/terms/contact/response.expectations.type';

import '../../../styles/components/terms/contact/ResponseExpectations.scss';

const ResponseExpectations = ({ expectations }: ResponseExpectationsProps) => {
  return (
    <section
      className='response-expectations'
      aria-labelledby='response-expectations-title'
    >
      <header className='response-expectations__header'>
        <span className='response-expectations__header--label'>
          What happens next
        </span>

        <h3
          id='response-expectations-title'
          className='response-expectations__header--title'
        >
          Your contact journey
        </h3>
      </header>

      <div className='response-expectations__steps'>
        {expectations.map((expectation, index) => (
          <ResponseExpectationItem
            key={expectation.id}
            {...expectation}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default ResponseExpectations;
