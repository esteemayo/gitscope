'use client';

import SuspensionReasonItem from './SuspensionReasonItem';
import { SuspensionReasonsProps } from '@/types/terms/accountSuspension/suspension.reasons.type';

import '../../../styles/components/terms/accountSuspension/SuspensionReasons.scss';

const SuspensionReasons = ({ reasons }: SuspensionReasonsProps) => {
  return (
    <section
      className='suspension-reasons'
      aria-labelledby='suspension-reasons-title'
    >
      <div className='suspension-reasons__header'>
        <span className='suspension-reasons__header--label'>
          Possible enforcement triggers
        </span>

        <h3
          id='suspension-reasons-title'
          className='suspension-reasons__header--title'
        >
          Why account action may occur
        </h3>
      </div>

      <div className='suspension-reasons__list'>
        {reasons.map((reason, index) => (
          <SuspensionReasonItem key={reason.id} {...reason} index={index} />
        ))}
      </div>
    </section>
  );
};

export default SuspensionReasons;
