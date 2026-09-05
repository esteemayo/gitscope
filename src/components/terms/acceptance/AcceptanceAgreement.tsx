'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';
import { ArrowDownRight } from 'lucide-react';

import { AcceptanceAgreementProps } from '@/types/terms/acceptance/acceptance.agreement.type';
import '../../../styles/components/terms/acceptance/AcceptanceAgreement.scss';

const AcceptanceAgreement = ({
  title,
  description,
  accentColor,
  className,
  style,
}: AcceptanceAgreementProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={clsx('acceptance-agreement', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='acceptance-agreement__icon'>
        <ArrowDownRight
          size={20}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='acceptance-agreement__content'>
        <h3 className='acceptance-agreement__content--title'>{title}</h3>

        <p className='acceptance-agreement__content--description'>
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default AcceptanceAgreement;
