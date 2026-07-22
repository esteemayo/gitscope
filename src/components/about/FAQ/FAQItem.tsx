'use client';

import { ChevronDown } from 'lucide-react';
import { useId, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { FAQItemProps } from '@/types/about/faq/faq.item.type';
import '../../../styles/components/about/FAQ/FAQItem.scss';

const FAQItem = ({ item: { answer, question }, variants }: FAQItemProps) => {
  const panelId = useId();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.article variants={variants} className='faq-item'>
      <button
        type='button'
        onClick={() => setIsOpen((prev) => !prev)}
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
