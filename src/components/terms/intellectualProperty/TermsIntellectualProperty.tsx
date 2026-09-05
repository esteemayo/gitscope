'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import IntellectualPropertyIntro from './IntellectualPropertyIntro';
import TermsSectionHeader from '../TermsSectionHeader';
import IntellectualPropertyRules from './IntellectualPropertyRules';
import IntellectualPropertyMap from './IntellectualPropertyMap';
import IntellectualPropertyNotice from './IntellectualPropertyNotice';

import { containerVariants } from '@/animations/page';
import { TermsIntellectualPropertyProps } from '@/types/terms/intellectualProperty/terms.intellectual.property.type';

import '../../../styles/components/terms/intellectualProperty/TermsIntellectualProperty.scss';

const TermsIntellectualProperty = ({
  badge,
  title,
  description,
  headerIcon,
  intro,
  layers,
  rules,
  notice,
  accentColor,
  className,
  style,
}: TermsIntellectualPropertyProps) => {
  return (
    <motion.section
      id='intellectual-property'
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className={clsx('terms-intellectual-property', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
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

        <div className='terms-intellectual-property__body'>
          <IntellectualPropertyIntro intro={intro} />

          <IntellectualPropertyMap layers={layers} />

          <IntellectualPropertyRules rules={rules} />

          <IntellectualPropertyNotice {...notice} />
        </div>
      </div>
    </motion.section>
  );
};

export default TermsIntellectualProperty;
