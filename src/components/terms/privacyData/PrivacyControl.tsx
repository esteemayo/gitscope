'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { PrivacyControlProps } from '@/types/terms/privacyData/privacy.control.type';
import '../../../styles/components/terms/privacyData/PrivacyControl.scss';

const PrivacyControl = ({
  title,
  description,
  icon: Icon,
  accentColor,
  index,
  className,
  style,
}: PrivacyControlProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={clsx(
        `privacy-control privacy-control--${index + 1}`,
        className,
      )}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='privacy-control__icon'>
        <Icon
          size={18}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='privacy-control__content'>
        <span className='privacy-control__content--number'>
          {String(index + 1).padStart(2, '0')}
        </span>

        <h4 className='privacy-control__content--title'>{title}</h4>

        <p className='privacy-control__content--description'>{description}</p>
      </div>
    </motion.article>
  );
};

export default PrivacyControl;
