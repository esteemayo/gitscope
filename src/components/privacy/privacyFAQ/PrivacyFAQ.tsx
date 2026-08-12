'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import PrivacyFAQCategory from './PrivacyFAQCategory';
import PrivacyFAQNotice from './PrivacyFAQNotice';
import PrivacySectionHeader from '../PrivacySectionHeader';

import { containerVariants } from '@/animations/page';
import { PrivacyFAQProps } from '@/types/privacy/privacyPolicy/privacy.faq.type';

import '../../../styles/components/privacy/privacyFAQ/PrivacyFAQ.scss';

const PrivacyFAQ = ({
  badge,
  title,
  subtitle,
  categories,
  notice,
  className,
  style,
}: PrivacyFAQProps) => {
  return (
    <motion.section
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className={clsx('privacy-faq', className)}
      style={style}
      aria-labelledby='privacy-faq-title'
    >
      <div className='privacy-faq__container'>
        <PrivacySectionHeader
          id='privacy-faq-title'
          badge={badge}
          title={title}
          subtitle={subtitle}
          variants={containerVariants}
        />

        <div className='privacy-faq__body'>
          <div className='privacy-faq__body--categories'>
            {categories.map((category) => (
              <motion.div key={category.id} variants={containerVariants}>
                <PrivacyFAQCategory {...category} />
              </motion.div>
            ))}
          </div>

          <motion.div variants={containerVariants}>
            <PrivacyFAQNotice {...notice} />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default PrivacyFAQ;
