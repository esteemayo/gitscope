'use client';

import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';

import InformationPanel from './InformationPanel';
import UsageStep from './UsageStep';
import PrivacySectionHeader from '../PrivacySectionHeader';

import { containerVariants } from '@/animations/page';
import { HowWeUseYourInformationProps } from '@/types/privacy/howWeUseYourInfo/how.we.use.your.information.type';

import '../../../styles/components/privacy/howWeUseYourInfo/HowWeUseYourInformation.scss';

const HowWeUseYourInformation = ({
  badge,
  title,
  subtitle,
  steps,
  defaultActiveStep,
}: HowWeUseYourInformationProps) => {
  const initialStepId = useMemo(() => {
    if (defaultActiveStep) {
      const exists = steps.some((step) => step.id === defaultActiveStep);

      if (exists) {
        return defaultActiveStep;
      }
    }

    return steps[0]?.id ?? '';
  }, [defaultActiveStep, steps]);

  const [activeStepId, setActiveStepId] = useState(initialStepId);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const currentIndex = steps.findIndex((step) => step.id === activeStepId);

    if (e.key === 'ArrowDown') {
      const next = Math.min(currentIndex + 1, steps.length - 1);
      setActiveStepId(steps[next].id);
    }

    if (e.key === 'ArrowUp') {
      const prev = Math.max(currentIndex - 1, 0);
      setActiveStepId(steps[prev].id);
    }
  };

  const activeStep = useMemo(() => {
    return steps.find((step) => step.id === activeStepId) ?? steps[0];
  }, [activeStepId, steps]);

  if (!activeStep) {
    return null;
  }

  return (
    <motion.section
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className='how-we-use-your-information'
      aria-labelledby='how-we-use-your-information-title'
    >
      <div className='how-we-use-your-information__container'>
        <PrivacySectionHeader
          id='how-we-use-your-information-title'
          badge={badge}
          title={title}
          subtitle={subtitle}
          variants={containerVariants}
        />

        <div
          onKeyDown={handleKeyDown}
          className='how-we-use-your-information__timeline'
          role='tablist'
          aria-label='How GitScope uses your information'
        >
          {steps.map((step) => (
            <motion.div key={step.id} variants={containerVariants}>
              <UsageStep
                {...step}
                active={activeStepId === step.id}
                onClick={() => setActiveStepId(step.id)}
              />
            </motion.div>
          ))}
        </div>

        <InformationPanel {...activeStep} totalSteps={steps.length} />
      </div>
    </motion.section>
  );
};

export default HowWeUseYourInformation;
