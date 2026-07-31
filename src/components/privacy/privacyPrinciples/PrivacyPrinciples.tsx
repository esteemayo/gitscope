'use client';

import { motion } from 'framer-motion';

import PrivacyPrinciple from './PrivacyPrinciple';
import PrivacySectionHeader from '../PrivacySectionHeader';

import { containerVariants } from '@/animations/page';
import { PrivacyPrinciplesProps } from '@/types/privacy/privacyPrinciples/privacy.principles.type';

import '../../../styles/components/privacy/privacyPrinciples/PrivacyPrinciples.scss';

const PrivacyPrinciples = ({
  badge,
  title,
  subtitle,
  principles,
}: PrivacyPrinciplesProps) => {
  return (
    <motion.section
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className='privacy-principles'
      aria-labelledby='privacy-principles-title'
    >
      <div className='privacy-principles__container'>
        <PrivacySectionHeader
          id='privacy-principles-title'
          badge={badge}
          title={title}
          subtitle={subtitle}
          variants={containerVariants}
        />

        <div className='privacy-principles__wrapper'>
          {principles.map((principle, index) => (
            <motion.div key={principle.id} variants={containerVariants}>
              <PrivacyPrinciple {...principle} reverse={index % 2 !== 0} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PrivacyPrinciples;
