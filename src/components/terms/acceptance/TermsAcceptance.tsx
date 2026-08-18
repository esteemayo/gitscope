'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';
import { ArrowDownRight } from 'lucide-react';

import TermsSectionHeader from '../TermsSectionHeader';
import TermsAcceptancePoint from './TermsAcceptancePoint';

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
  points,
  className,
  style,
}: TermsAcceptanceProps) => {
  return (
    <motion.section
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className={clsx('terms-acceptance', className)}
      style={style}
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
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className='terms-acceptance__intro'
          >
            <span className='terms-acceptance__intro--label'>Agreement</span>

            <p className='terms-acceptance__intro--description'>{intro}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className='terms-acceptance__agreement'
            style={
              {
                '--agreement-accent': agreementAccentColor,
              } as React.CSSProperties
            }
          >
            <div className='terms-acceptance__agreement-icon'>
              <ArrowDownRight
                size={20}
                strokeWidth={1.8}
                role='img'
                aria-hidden='true'
                focusable='false'
              />
            </div>

            <div className='terms-acceptance__agreement-content'>
              <h3 className='terms-acceptance__agreement-content--title'>
                {agreementTitle}
              </h3>

              <p className='terms-acceptance__agreement-content--description'>
                {agreementDescription}
              </p>
            </div>
          </motion.div>

          <div className='terms-acceptance__points'>
            {points.map((point, index) => (
              <motion.div
                key={point.id}
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
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
