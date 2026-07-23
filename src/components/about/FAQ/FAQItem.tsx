'use client';

import { ChevronDown } from 'lucide-react';
import { useId } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { FAQItemProps } from '@/types/about/faq/faq.item.type';
import '../../../styles/components/about/FAQ/FAQItem.scss';

const FAQItem = ({
  isOpen,
  item: { id, answer, question },
  variants,
  onToggle,
}: FAQItemProps) => {
  const panelId = useId();

  return (
    <motion.article variants={variants} className='faq-item'>
      <button
        type='button'
        onClick={() => onToggle(id)}
        className='faq-item__trigger'
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span className='faq-item__trigger--question'>{question}</span>

        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className='faq-item__trigger--icon'
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='faq-item__wrapper'
            role='region'
          >
            <p className='faq-item__wrapper--answer'>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
};

export default FAQItem;
