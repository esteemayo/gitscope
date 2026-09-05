'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';
import { CalendarDays } from 'lucide-react';

import TermsUpdatedItem from './TermsUpdatedItem';
import TermsSectionHeader from '../TermsSectionHeader';

import { containerVariants } from '@/animations/page';
import { TermsUpdatedProps } from '@/types/terms/termsUpdated/terms.updated.type';

import '../../../styles/components/terms/termsUpdated/TermsUpdated.scss';

const TermsUpdated = ({
  badge,
  title,
  description,
  items,
  accentColor,
  className,
  style,
}: TermsUpdatedProps) => {
  return (
    <motion.section
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className={clsx('term-updated', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
      aria-labelledby='term-updated-title'
    >
      <div className='term-updated__container'>
        <TermsSectionHeader
          id='term-updated-title'
          badge={badge}
          title={title}
          description={description}
          icon={CalendarDays}
          variants={containerVariants}
        />

        <div className='term-updated__body'>
          {items.map((item, index) => (
            <TermsUpdatedItem key={item.label} {...item} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TermsUpdated;
