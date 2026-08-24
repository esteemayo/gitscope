'use client';

import { motion } from 'framer-motion';

import TermsSectionHeader from '../TermsSectionHeader';

import { containerVariants } from '@/animations/page';
import { TermsIntellectualPropertyProps } from '@/types/terms/intellectualProperty/terms.intellectual.property.type';

import '../../../styles/components/terms/intellectualProperty/TermsIntellectualProperty.scss';

const TermsIntellectualProperty = ({
  badge,
  title,
  description,
  headerIcon,
  intro,
  accentColor,
}: TermsIntellectualPropertyProps) => {
  return (
    <motion.section
      id='intellectual-property'
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className='terms-intellectual-property'
      aria-labelledby='terms-intellectual-property-title'
    >
      <div className='terms-intellectual-property__container'>
        <TermsSectionHeader
          id='terms-intellectual-property-title'
          badge={badge}
          title={title}
          description={description}
          icon={headerIcon}
          variants={containerVariants}
        />
      </div>
    </motion.section>
  );
};

export default TermsIntellectualProperty;
