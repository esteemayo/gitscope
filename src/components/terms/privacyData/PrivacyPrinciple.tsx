'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { PrivacyPrincipleProps } from '@/types/terms/privacyData/privacy.principle.type';
import '../../../styles/components/terms/privacyData/PrivacyPrinciple.scss';

const PrivacyPrinciple = ({
  title,
  description,
  icon: Icon,
  accentColor,
  index,
  className,
  style,
}: PrivacyPrincipleProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.35,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={clsx('privacy-principle', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='privacy-principle__number'>
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className='privacy-principle__icon'>
        <Icon
          size={16}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='privacy-principle__content'>
        <h4 className='privacy-principle__content--title'>{title}</h4>

        <p className='privacy-principle__content--description'>{description}</p>
      </div>
    </motion.article>
  );
};

export default PrivacyPrinciple;
