'use client';

import TerminationEffectItem from './TerminationEffectItem';
import { TerminationEffectsProps } from '@/types/terms/termination/termination.effects.type';

import '../../../styles/components/terms/termination/TerminationEffects.scss';

const TerminationEffects = ({ effects }: TerminationEffectsProps) => {
  return (
    <section
      className='termination-effects'
      aria-labelledby='termination-effects-title'
    >
      <header className='termination-effects__header'>
        <div className='termination-effects__heading'>
          <span className='termination-effects__heading--label'>
            After termination
          </span>

          <h3
            id='termination-effects-title'
            className='termination-effects__heading--title'
          >
            What happens next
          </h3>
        </div>

        <p className='termination-effects__description'>
          Ending the account relationship changes access to GitScope and begins
          the relevant account and data handling process.
        </p>
      </header>

      <div className='termination-effects__timeline'>
        {effects.map((effect, index) => {
          const isLast = index === effects.length - 1;

          return (
            <div key={effect.id} className='termination-effects__item-wrapper'>
              <TerminationEffectItem {...effect} index={index} />

              {!isLast && (
                <div
                  className='termination-effects__connector'
                  aria-hidden='true'
                >
                  <span />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TerminationEffects;
