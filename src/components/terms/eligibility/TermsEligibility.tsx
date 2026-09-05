'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import TermsSectionHeader from '../TermsSectionHeader';
import EligibilityIntro from './EligibilityIntro';
import TermsEligibilityItem from './TermsEligibilityItem';

import { containerVariants } from '@/animations/page';
import { TermsEligibilityProps } from '@/types/terms/eligibility/terms.eligibility.type';

import '../../../styles/components/terms/eligibility/TermsEligibility.scss';

const TermsEligibility = ({
  badge,
  title,
  description,
  intro,
  headerIcon,
  accentColor,
  items,
  className,
  style,
}: TermsEligibilityProps) => {
  return (
    <motion.section
      id='eligibility'
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className={clsx('terms-eligibility', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
      aria-labelledby='terms-eligibility-title'
    >
      <div className='terms-eligibility__container'>
        <TermsSectionHeader
          id='terms-eligibility-title'
          badge={badge}
          title={title}
          description={description}
          icon={headerIcon}
          variants={containerVariants}
        />

        <div className='terms-eligibility__body'>
          <EligibilityIntro intro={intro} />

          <div className='terms-eligibility__items'>
            {items.map((item, index) => (
              <TermsEligibilityItem key={item.id} {...item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default TermsEligibility;
