'use client';

import { useState } from 'react';
import { motion, Variants } from 'framer-motion';

import FAQItem from './FAQItem';
import AboutSectionHeader from '../AboutSectionHeader';

import { FAQProps } from '@/types/about/faq/faq.type';
import '../../../styles/components/about/FAQ/FAQ.scss';

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: 'easeOut',
      staggerChildren: 0.3,
    },
  },
};

const FAQ = ({ badge, title, description, items }: FAQProps) => {
  const [activeId, setActiveId] = useState<string | null>(items[0].id);

  const handleToggle = (itemId: string) => {
    setActiveId(activeId === itemId ? null : itemId);
  };

  return (
    <motion.section
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.25, margin: '-50px' }}
      className='faq'
      aria-labelledby='faq-title'
    >
      <div className='faq__container'>
        <motion.div variants={containerVariants}>
          <AboutSectionHeader
            id='faq-title'
            badge={badge}
            title={title}
            description={description}
          />
        </motion.div>

        <div className='faq__list'>
          {items.map((item) => (
            <FAQItem
              key={item.id}
              isOpen={activeId === item.id}
              item={item}
              variants={containerVariants}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FAQ;
