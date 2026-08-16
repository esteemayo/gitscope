'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import TermsSectionHeader from '../TermsSectionHeader';

import { containerVariants } from '@/animations/page';
import { TermsUpdatedProps } from '@/types/terms/termsUpdated/terms.updated.type';

import '../../../styles/components/terms/termsUpdated/TermsUpdated.scss';

const TermsUpdated = ({
  badge,
  title,
  description,
  changeLogLabel,
  changeLogHref,
  items,
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
      style={style}
      aria-labelledby='term-updated-title'
    >
      <div className='term-updated__container'>
        <TermsSectionHeader
          id='term-updated-title'
          badge={badge}
          title={title}
          description={description}
          variants={containerVariants}
        />
      </div>
    </motion.section>
  );
};

export default TermsUpdated;
