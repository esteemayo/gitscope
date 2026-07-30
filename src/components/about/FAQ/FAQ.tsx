'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import FAQItem from './FAQItem';
import AboutSectionHeader from '../AboutSectionHeader';

import { FAQProps } from '@/types/about/faq/faq.type';
import { containerVariants } from '@/animations/page';

import '../../../styles/components/about/FAQ/FAQ.scss';

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
        <AboutSectionHeader
          id='faq-title'
          badge={badge}
          title={title}
          description={description}
          variants={containerVariants}
        />

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
