'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { TermsUpdatedItemProps } from '@/types/terms/termsUpdated/terms.updated.item.type';
import '../../../styles/components/terms/termsUpdated/TermsUpdatedItem.scss';

const TermsUpdatedItem = ({
  label,
  value,
  icon: Icon,
  accentColor,
  index,
  className,
  style,
}: TermsUpdatedItemProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={clsx('terms-updated-item', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='terms-updated-item__icon'>
        <Icon
          size={20}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='terms-updated-item__content'>
        <span className='terms-updated-item__content--label'>{label}</span>

        <strong className='terms-updated-item__content--value'>{value}</strong>
      </div>
    </motion.article>
  );
};

export default TermsUpdatedItem;
