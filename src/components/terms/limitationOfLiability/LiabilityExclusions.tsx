'use client';

import LiabilityExclusionItem from './LiabilityExclusionItem';
import { LiabilityExclusionsProps } from '@/types/terms/limitationOfLiability/liability.exclusions.type';

import '../../../styles/components/terms/limitationOfLiability/LiabilityExclusions.scss';

const LiabilityExclusions = ({ exclusions }: LiabilityExclusionsProps) => {
  return (
    <section
      className='liability-exclusions'
      aria-labelledby='liability-exclusions-title'
    >
      <div className='liability-exclusions__header'>
        <span className='liability-exclusions__header--label'>
          Excluded liability
        </span>

        <h3
          id='liability-exclusions-title'
          className='liability-exclusions__header--title'
        >
          Areas where liability is limited
        </h3>
      </div>

      <div className='liability-exclusions__list'>
        {exclusions.map((exclusion, index) => (
          <LiabilityExclusionItem
            key={exclusion.id}
            {...exclusion}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default LiabilityExclusions;
