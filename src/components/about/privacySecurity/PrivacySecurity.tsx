'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import SecurityCard from './SecurityCard';
import SectionIntro from '@/components/ui/SectionIntro';

import { containerVariants } from '@/animations/page';
import { PrivacySecurityProps } from '@/types/about/privacySecurity/privacy.security.type';

import '../../../styles/components/about/privacySecurity/PrivacySecurity.scss';

const PrivacySecurity = ({
  badge,
  title,
  description,
  features,
  accentColor,
  className,
  style,
}: PrivacySecurityProps) => {
  return (
    <motion.section
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className={clsx('privacy-security', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
      aria-labelledby='privacy-security-title'
    >
      <div className='privacy-security__container'>
        <SectionIntro
          id='privacy-security-title'
          badge={badge}
          title={title}
          description={description}
          accentColor={accentColor}
          variants={containerVariants}
        />

        <div className='privacy-security__grid'>
          {features.map((feature, index) => (
            <SecurityCard key={feature.id} {...feature} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PrivacySecurity;
