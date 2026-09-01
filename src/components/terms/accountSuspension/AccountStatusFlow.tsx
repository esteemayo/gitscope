'use client';

import { ArrowDown } from 'lucide-react';

import AccountStatusStep from './AccountStatusStep';
import { AccountStatusFlowProps } from '@/types/terms/accountSuspension/account.status.flow.type';

import '../../../styles/components/terms/accountSuspension/AccountStatusFlow.scss';

const AccountStatusFlow = ({ statusSteps }: AccountStatusFlowProps) => {
  return (
    <section
      className='account-status-flow'
      aria-labelledby='account-status-flow-title'
    >
      <header className='account-status-flow__header'>
        <div className='account-status-flow__heading'>
          <span className='account-status-flow__heading--label'>
            Account state
          </span>

          <h3
            id='account-status-flow-title'
            className='account-status-flow__heading--title'
          >
            How account access may change
          </h3>
        </div>

        <p className='account-status-flow__description'>
          Enforcement action may move an account from normal access to
          restriction, suspension, or termination.
        </p>
      </header>

      <div className='account-status-flow__timeline'>
        {statusSteps.map((step, index) => {
          const isLastStep = index + 1 === statusSteps.length;

          return (
            <div key={step.id} className='account-status-flow__step-wrapper'>
              <AccountStatusStep {...step} index={index} />

              {!isLastStep && (
                <div
                  className='account-status-flow__connector'
                  aria-hidden='true'
                >
                  <span />

                  <ArrowDown
                    size={14}
                    strokeWidth={1.8}
                    role='img'
                    aria-hidden='true'
                    focusable='false'
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AccountStatusFlow;
