'use client';

import SurvivingObligationItem from './SurvivingObligationItem';
import { SurvivingObligationsProps } from '@/types/terms/termination/surviving.obligations.type';

import '../../../styles/components/terms/termination/SurvivingObligations.scss';

const SurvivingObligations = ({ obligations }: SurvivingObligationsProps) => {
  return (
    <section
      className='surviving-obligations'
      aria-labelledby='surviving-obligations-title'
    >
      <header className='surviving-obligations__header'>
        <span className='surviving-obligations__header--label'>
          Terms that remain effective
        </span>

        <h3
          id='surviving-obligations-title'
          className='surviving-obligations__header--title'
        >
          Ending access does not end every obligation
        </h3>

        <p className='surviving-obligations__header--description'>
          Certain provisions continue after termination where their purpose
          requires ongoing effect.
        </p>
      </header>

      <ul className='surviving-obligations__list'>
        {obligations.map((obligation, index) => (
          <SurvivingObligationItem
            key={obligation.id}
            {...obligation}
            index={index}
          />
        ))}
      </ul>
    </section>
  );
};

export default SurvivingObligations;
