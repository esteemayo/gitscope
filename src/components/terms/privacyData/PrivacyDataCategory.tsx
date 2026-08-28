'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { PrivacyDataCategoryProps } from '@/types/terms/privacyData/privacy.data.categorytype';
import '../../../styles/components/terms/privacyData/PrivacyDataCategory.scss';

const PrivacyDataCategory = ({
  category,
  examples,
  icon: Icon,
  accentColor,
  index,
  className,
  style,
}: PrivacyDataCategoryProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, x: 15 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.35,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={clsx('privacy-data-category', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='privacy-data-category__top'>
        <div className='privacy-data-category__icon'>
          <Icon
            size={18}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />
        </div>

        <span className='privacy-data-category__number'>
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <h4 className='privacy-data-category__category'>{category}</h4>

      <ul className='privacy-data-category__list'>
        {examples.map((example) => (
          <li key={example} className='privacy-data-category__list--item'>
            {example}
          </li>
        ))}
      </ul>
    </motion.article>
  );
};

export default PrivacyDataCategory;
