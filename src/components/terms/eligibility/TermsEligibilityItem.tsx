'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { TermsEligibilityItemProps } from '@/types/terms/eligibility/terms.eligibility.item.type';
import '../../../styles/components/terms/eligibility/TermsEligibilityItem.scss';

const TermsEligibilityItem = ({
  title,
  description,
  icon: Icon,
  accentColor,
  index,
  className,
  style,
}: TermsEligibilityItemProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={clsx('terms-eligibility-item', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='terms-eligibility-item__top'>
        <span className='terms-eligibility-item__top--number'>
          {String(index + 1).padStart(2, '0')}
        </span>

        <div className='terms-eligibility-item__top--icon'>
          <Icon
            size={18}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />
        </div>
      </div>

      <div className='terms-eligibility-item__content'>
        <h3 className='terms-eligibility-item__content--title'>{title}</h3>

        <p className='terms-eligibility-item__content--description'>
          {description}
        </p>
      </div>
    </motion.article>
  );
};

export default TermsEligibilityItem;
