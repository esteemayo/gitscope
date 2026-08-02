'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

import { InformationPanelProps } from '@/types/privacy/howWeUseYourInfo/information.panel.type';
import '../../../styles/components/privacy/howWeUseYourInfo/InformationPanel.scss';

const InformationPanel = ({
  id,
  step,
  title,
  description,
  icon: Icon,
  accentColor,
  features,
  documentation,
  totalSteps,
}: InformationPanelProps) => {
  return (
    <AnimatePresence mode='wait'>
      <motion.article
        key={id}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -24 }}
        transition={{ duration: 0.3 }}
        className='information-panel'
        style={
          {
            '--accent-color': accentColor,
          } as React.CSSProperties
        }
      >
        <div className='information-panel__sidebar'>
          <div className='information-panel__icon'>
            <Icon size={60} role='img' aria-hidden='true' focusable='false' />
          </div>

          <div className='information-panel__wrapper'>
            <span className='information-panel__step'>
              Step {step.toString().padStart(2, '0')}
            </span>

            <h3 className='information-panel__label'>{title}</h3>

            <div className='information-panel__progress'>
              <div className='information-panel__progress-track'>
                <span
                  style={{
                    width: `${(Number(step) / totalSteps) * 100}%`,
                  }}
                />
              </div>

              <small>
                Step {step} of {totalSteps}
              </small>
            </div>
          </div>
        </div>

        <div className='information-panel__body'>
          <div className='information-panel__content'>
            <h3 className='information-panel__content--title'>{title}</h3>

            <p className='information-panel__content--description'>
              {description}
            </p>
          </div>

          <ul className='information-panel__features'>
            {features.map((feature) => (
              <li key={feature} className='information-panel__feature'>
                <CheckCircle2
                  size={18}
                  className='information-panel__feature--icon'
                  role='img'
                  aria-hidden='true'
                  focusable='false'
                />

                <span className='information-panel__feature--item'>
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          {documentation && (
            <Link href={documentation.href} className='information-panel__cta'>
              <span className='information-panel__cta--label'>
                {documentation.label}
              </span>

              <ArrowRight
                size={18}
                className='information-panel__cta--arrow'
                role='img'
                aria-hidden='true'
                focusable='false'
              />
            </Link>
          )}
        </div>
      </motion.article>
    </AnimatePresence>
  );
};

export default InformationPanel;
