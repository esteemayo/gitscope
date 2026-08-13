'use client';

import clsx from 'clsx';
import { motion, useReducedMotion } from 'framer-motion';

import PrivacyContactNotice from './PrivacyContactNotice';
import PrivacyContactCard from './PrivacyContactCard';
import PrivacySectionHeader from '../PrivacySectionHeader';

import { containerVariants } from '@/animations/page';
import { PrivacyContactProps } from '@/types/privacy/privacyContact/privacy.contact.type';

import '../../../styles/components/privacy/privacyContact/PrivacyContact.scss';

const PrivacyContact = ({
  badge,
  title,
  subtitle,
  cards,
  notice,
  className,
  style,
}: PrivacyContactProps) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className={clsx('privacy-contact', className)}
      style={style}
      aria-labelledby='privacy-contact-title'
    >
      <div className='privacy-contact__container'>
        <PrivacySectionHeader
          id='privacy-contact-title'
          badge={badge}
          title={title}
          subtitle={subtitle}
          variants={containerVariants}
        />

        <div className='privacy-contact__body'>
          <div className='privacy-contact__body--cards'>
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                variants={containerVariants}
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : { delay: index * 0.08 }
                }
              >
                <PrivacyContactCard {...card} />
              </motion.div>
            ))}
          </div>

          <motion.div variants={containerVariants}>
            <PrivacyContactNotice {...notice} />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default PrivacyContact;
