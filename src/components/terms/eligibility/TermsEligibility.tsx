'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import TermsSectionHeader from '../TermsSectionHeader';
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
          <motion.div
            className='terms-eligibility__intro'
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className='terms-eligibility__intro--label'>Eligibility</span>

            <p className='terms-eligibility__intro--description'>{intro}</p>
          </motion.div>

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
