'use client';

import { motion, Variants } from 'framer-motion';

import SecurityCard from './SecurityCard';
import AboutSectionHeader from '../AboutSectionHeader';

import { PrivacySecurityProps } from '@/types/about/privacySecurity/privacy.security.type';
import '../../../styles/components/about/privacySecurity/PrivacySecurity.scss';

const gridVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: 'easeOut',
      staggerChildren: 0.3,
    },
  },
};

const PrivacySecurity = ({
  badge,
  title,
  description,
  features,
}: PrivacySecurityProps) => {
  return (
    <section
      className='privacy-security'
      aria-labelledby='privacy-security-title'
    >
      <div className='privacy-security__container'>
        <AboutSectionHeader
          id='privacy-security-title'
          badge={badge}
          title={title}
          description={description}
        />

        <motion.div
          variants={gridVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.25 }}
          className='privacy-security__grid'
        >
          {features.map((feature) => (
            <SecurityCard
              key={feature.id}
              feature={feature}
              variants={gridVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacySecurity;
