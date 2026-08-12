'use client';

import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useId, useState } from 'react';

import { PrivacyFAQItemProps } from '@/types/privacy/privacyPolicy/privacy.faq.item.type';
import '../../../styles/components/privacy/privacyFAQ/PrivacyFAQItem.scss';

const PrivacyFAQItem = ({ question, answer }: PrivacyFAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const generatedId = useId();

  const buttonId = `faq-question-${generatedId}`;

  const answerId = `faq-answer-${generatedId}`;

  return (
    <article
      className={clsx('privacy-faq-item', {
        'privacy-faq-item--open': isOpen,
      })}
    >
      <button
        id={buttonId}
        className='privacy-faq-item__trigger'
        aria-expanded={isOpen}
        aria-controls={answerId}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className='privacy-faq-item__trigger--question'>{question}</span>

        <span
          className='privacy-faq-item__trigger--indicator'
          aria-hidden='true'
        >
          <ChevronDown
            size={16}
            role='img'
            aria-hidden='true'
            focusable='false'
          />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={answerId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : {
                    height: { duration: 0.28, ease: 'easeOut' },
                    opacity: { duration: 0.2 },
                  }
            }
            className='privacy-faq-item__answer-wrapper'
            role='region'
            aria-labelledby={buttonId}
          >
            <div className='privacy-faq-item__answer'>
              <p className='privacy-faq-item__answer--text'>{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
};

export default PrivacyFAQItem;
