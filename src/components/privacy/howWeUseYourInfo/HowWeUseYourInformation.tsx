'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

import UsageStep from './UsageStep';
import PrivacySectionHeader from '../PrivacySectionHeader';

import { containerVariants } from '@/animations/page';
import { HowWeUseYourInformationProps } from '@/types/privacy/howWeUseYourInfo/how.we.use.your.information.type';

import '../../../styles/components/privacy/howWeUseYourInfo/HowWeUseYourInformation.scss';
import Link from 'next/link';

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

  const activeStep = useMemo(() => {
    return steps.find((step) => step.id === activeStepId) ?? steps[0];
  }, [activeStepId, steps]);

  if (!activeStep) {
    return null;
  }

  const ActiveIcon = activeStep.icon;

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

        <AnimatePresence mode='wait'>
          <motion.article
            key={activeStep.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.3 }}
            className='how-we-use-your-information__panel'
            style={
              {
                '--accent-color': activeStep.accentColor,
              } as React.CSSProperties
            }
          >
            <div className='how-we-use-your-information__panel-sidebar'>
              <div className='how-we-use-your-information__panel-icon'>
                <ActiveIcon
                  size={60}
                  role='img'
                  aria-hidden='true'
                  focusable='false'
                />
              </div>

              <span className='how-we-use-your-information__panel-step'>
                Step {activeStep.step.toString().padStart(2, '0')}
              </span>

              <h3 className='how-we-use-your-information__panel-label'>
                {activeStep.title}
              </h3>

              <div className='how-we-use-your-information__progress'>
                <div className='how-we-use-your-information__progress-track'>
                  <span
                    style={{
                      width: `${(Number(activeStep.step) / steps.length) * 100}%`,
                    }}
                  />
                </div>

                <small>
                  Step {activeStep.step} of {steps.length}
                </small>
              </div>
            </div>

            <div className='how-we-use-your-information__body'>
              <div className='how-we-use-your-information__content'>
                <h3 className='how-we-use-your-information__content--title'>
                  {activeStep.title}
                </h3>

                <p className='how-we-use-your-information__content--description'>
                  {activeStep.description}
                </p>
              </div>

              <ul className='how-we-use-your-information__features'>
                {activeStep.features.map((feature) => (
                  <li
                    key={feature}
                    className='how-we-use-your-information__feature'
                  >
                    <CheckCircle2
                      size={18}
                      className='how-we-use-your-information__feature--icon'
                      role='img'
                      aria-hidden='true'
                      focusable='false'
                    />

                    <span className='how-we-use-your-information__feature--item'>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {activeStep.documentation && (
                <Link
                  href={activeStep.documentation.href}
                  className='how-we-use-your-information__cta'
                >
                  <span className='how-we-use-your-information__cta--label'>
                    {activeStep.documentation.label}
                  </span>

                  <ArrowRight
                    size={18}
                    className='how-we-use-your-information__cta--arrow'
                    role='img'
                    aria-hidden='true'
                    focusable='false'
                  />
                </Link>
              )}
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default HowWeUseYourInformation;
