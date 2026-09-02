'use client';

import ChangeReasonItem from './ChangeReasonItem';
import { ChangeReasonsProps } from '@/types/terms/changesToTerms/changes.reasons.type';

import '../../../styles/components/terms/changesToTerms/ChangeReasons.scss';

const ChangeReasons = ({ reasons }: ChangeReasonsProps) => {
  return (
    <section className='change-reasons' aria-labelledby='change-reasons-title'>
      <header className='change-reasons__header'>
        <span className='change-reasons__header--label'>
          Why changes may happen
        </span>

        <h3 id='change-reasons-title' className='change-reasons__header--title'>
          Keeping the Terms aligned with GitScope
        </h3>

        <p className='change-reasons__header--paragraph'>
          Changes are made where the Terms need to accurately reflect the
          service and the responsibilities surrounding its use.
        </p>
      </header>

      <div className='change-reasons__list'>
        {reasons.map((reason, index) => (
          <ChangeReasonItem key={reason.id} {...reason} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ChangeReasons;
