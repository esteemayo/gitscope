'use client';

import { motion } from 'framer-motion';

import SecurityCard from './SecurityCard';
import AboutSectionHeader from '../AboutSectionHeader';

import { containerVariants } from '@/animations/about';
import { PrivacySecurityProps } from '@/types/about/privacySecurity/privacy.security.type';

import '../../../styles/components/about/privacySecurity/PrivacySecurity.scss';

const PrivacySecurity = ({
  badge,
  title,
  description,
  features,
}: PrivacySecurityProps) => {
  return (
    <motion.section
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.25, margin: '-50px' }}
      className='privacy-security'
      aria-labelledby='privacy-security-title'
    >
      <div className='privacy-security__container'>
        <AboutSectionHeader
          id='privacy-security-title'
          badge={badge}
          title={title}
          description={description}
          variants={containerVariants}
        />

        <div className='privacy-security__grid'>
          {features.map((feature) => (
            <SecurityCard
              key={feature.id}
              feature={feature}
              variants={containerVariants}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PrivacySecurity;
