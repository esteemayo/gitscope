'use client';

import PrivacyPrinciple from './PrivacyPrinciple';
import { PrivacyPrinciplesProps } from '@/types/terms/privacyData/privacy.principles.type';

import '../../../styles/components/terms/privacyData/PrivacyPrinciples.scss';

const PrivacyPrinciples = ({ principles }: PrivacyPrinciplesProps) => {
  return (
    <section
      className='privacy-principles'
      aria-labelledby='privacy-principles-title'
    >
      <div className='privacy-principles__intro'>
        <span className='privacy-principles__intro--label'>
          Privacy principles
        </span>

        <h3
          id='privacy-principles-title'
          className='privacy-principles__intro--title'
        >
          Rules guilding data handling
        </h3>
      </div>

      <div className='privacy-principles__list'>
        {principles.map((principle, index) => (
          <PrivacyPrinciple key={principle.id} {...principle} index={index} />
        ))}
      </div>
    </section>
  );
};

export default PrivacyPrinciples;
