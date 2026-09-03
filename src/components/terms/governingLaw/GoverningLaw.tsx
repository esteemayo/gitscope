'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import DisputeResolution from './DisputeResolution';
import LegalPrinciples from './LegalPrinciples';
import TermsSectionHeader from '../TermsSectionHeader';
import JurisdictionPanel from './JurisdictionPanel';
import GoverningLawIntro from './GoverningLawIntro';

import { containerVariants } from '@/animations/page';
import { GoverningLawProps } from '@/types/terms/governingLaw/governing.law.type';

import '../../../styles/components/terms/governingLaw/GoverningLaw.scss';

const GoverningLaw = ({
  badge,
  title,
  description,
  headerIcon,
  intro,
  jurisdiction,
  principles,
  disputeResolution,
  accentColor,
  className,
  style,
}: GoverningLawProps) => {
  return (
    <motion.section
      id='governing-law'
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className={clsx('governing-law', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
      aria-labelledby='governing-law-title'
    >
      <div className='governing-law__container'>
        <TermsSectionHeader
          id='governing-law-title'
          badge={badge}
          title={title}
          description={description}
          icon={headerIcon}
          variants={containerVariants}
        />

        <div className='governing-law__body'>
          <GoverningLawIntro intro={intro} />

          <JurisdictionPanel {...jurisdiction} />

          <LegalPrinciples principles={principles} />

          <DisputeResolution {...disputeResolution} />
        </div>
      </div>
    </motion.section>
  );
};

export default GoverningLaw;
