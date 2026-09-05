'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import AcceptanceAgreement from './AcceptanceAgreement';
import AcceptanceIntro from './AcceptanceIntro';
import TermsAcceptancePoint from './TermsAcceptancePoint';
import TermsSectionHeader from '../TermsSectionHeader';

import { containerVariants } from '@/animations/page';
import { TermsAcceptanceProps } from '@/types/terms/acceptance/terms.acceptance.type';

import '../../../styles/components/terms/acceptance/TermsAcceptance.scss';

const TermsAcceptance = ({
  badge,
  title,
  description,
  headerIcon,
  intro,
  agreementTitle,
  agreementDescription,
  agreementAccentColor,
  accentColor,
  points,
  className,
  style,
}: TermsAcceptanceProps) => {
  return (
    <motion.section
      id='acceptance-of-terms'
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className={clsx('terms-acceptance', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
      aria-labelledby='terms-acceptance-title'
    >
      <div className='terms-acceptance__container'>
        <TermsSectionHeader
          id='terms-acceptance-title'
          badge={badge}
          title={title}
          description={description}
          icon={headerIcon}
          variants={containerVariants}
        />

        <div className='terms-acceptance__body'>
          <AcceptanceIntro intro={intro} />

          <AcceptanceAgreement
            title={agreementTitle}
            description={agreementDescription}
            accentColor={agreementAccentColor}
          />

          <div className='terms-acceptance__points'>
            {points.map((point, index) => (
              <motion.div
                key={point.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <TermsAcceptancePoint {...point} count={index + 1} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default TermsAcceptance;
