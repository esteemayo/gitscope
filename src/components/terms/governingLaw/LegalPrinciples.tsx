'use client';

import LegalPrincipleItem from './LegalPrincipleItem';
import { LegalPrinciplesProps } from '@/types/terms/governingLaw/legal.principles.type';

import '../../../styles/components/terms/governingLaw/LegalPrinciples.scss';

const LegalPrinciples = ({ principles }: LegalPrinciplesProps) => {
  return (
    <section
      className='legal-principles'
      aria-labelledby='legal-principles-title'
    >
      <header className='legal-principles__header'>
        <span className='legal-principles__header--label'>Legal framework</span>

        <h3
          id='legal-principles-title'
          className='legal-principles__header--title'
        >
          How governing law affects these Terms
        </h3>
      </header>

      <div className='legal-principles__grid'>
        {principles.map((principle, index) => (
          <LegalPrincipleItem key={principle.id} {...principle} index={index} />
        ))}
      </div>
    </section>
  );
};

export default LegalPrinciples;
