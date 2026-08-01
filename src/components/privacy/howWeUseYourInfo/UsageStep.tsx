'use client';

import clsx from 'clsx';
import { ChevronRight } from 'lucide-react';

import { UsageStepProps } from '@/types/privacy/howWeUseYourInfo/usage.step.type';
import '../../../styles/components/privacy/howWeUseYourInfo/UsageStep.scss';

const UsageStep = ({
  step,
  title,
  icon: Icon,
  accentColor,
  active,
  className,
  style,
  onClick,
}: UsageStepProps) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className={clsx(
        'usage-step',
        { 'usage-step--active': active },
        className,
      )}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
      role='tab'
      aria-selected={active}
    >
      <div className='usage-step__icon'>
        <Icon size={30} role='img' aria-hidden='true' focusable='false' />
      </div>

      <div className='usage-step__content'>
        <span className='usage-step__content--number'>
          Step {step.toString().padStart(2, '0')}
        </span>

        <h3 className='usage-step__content--title'>{title}</h3>
      </div>

      <ChevronRight
        size={18}
        className='usage-step__arrow'
        role='img'
        aria-hidden='true'
        focusable='false'
      />
    </button>
  );
};

export default UsageStep;
