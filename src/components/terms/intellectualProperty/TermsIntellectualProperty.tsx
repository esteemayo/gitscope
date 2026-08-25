'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';
import { Copyright } from 'lucide-react';

import IntellectualPropertyRules from './IntellectualPropertyRules';
import TermsSectionHeader from '../TermsSectionHeader';
import IntellectualPropertyNotice from './IntellectualPropertyNotice';
import IntellectualPropertyMap from './IntellectualPropertyMap';

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
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className='terms-intellectual-property__intro'
          >
            <div className='terms-intellectual-property__intro--mark'>
              <Copyright
                size={16}
                strokeWidth={1.8}
                role='img'
                aria-hidden='true'
                focusable='false'
              />
            </div>

            <div className='terms-intellectual-property__content'>
              <span className='terms-intellectual-property__content--label'>
                Ownership framework
              </span>

              <p className='terms-intellectual-property__content--description'>
                {intro}
              </p>
            </div>
          </motion.div>

          <IntellectualPropertyMap layers={layers} />

          <IntellectualPropertyRules rules={rules} />

          <IntellectualPropertyNotice {...notice} />
        </div>
      </div>
    </motion.section>
  );
};

export default TermsIntellectualProperty;
