'use client';

import IntellectualPropertyRule from './IntellectualPropertyRule';
import { IntellectualPropertyRulesProps } from '@/types/terms/intellectualProperty/intellectual.property.rules.type';

import '../../../styles/components/terms/intellectualProperty/IntellectualPropertyRules.scss';

const IntellectualPropertyRules = ({
  rules,
}: IntellectualPropertyRulesProps) => {
  return (
    <section
      className='intellectual-property-rules'
      aria-labelledby='intellectual-property-rules-title'
    >
      <header className='intellectual-property-rules__header'>
        <div className='intellectual-property-rules__group'>
          <span className='intellectual-property-rules__group--label'>
            Usage boundaries
          </span>

          <h3
            id='intellectual-property-rules-title'
            className='intellectual-property-rules__group--title'
          >
            Using GitScope materials
          </h3>
        </div>

        <p className='intellectual-property-rules__description'>
          Your access to GitScope does not transfer ownership of protected
          product materials
        </p>
      </header>

      <div className='intellectual-property-rules__list'>
        {rules.map((rule, index) => (
          <IntellectualPropertyRule key={rule.id} {...rule} index={index} />
        ))}
      </div>
    </section>
  );
};

export default IntellectualPropertyRules;
