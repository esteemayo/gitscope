'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import LiabilityBoundary from './LiabilityBoundary';
import LiabilityCap from './LiabilityCap';
import TermsSectionHeader from '../TermsSectionHeader';
import LiabilityIntro from './LiabilityIntro';
import LiabilityExclusions from './LiabilityExclusions';

import { containerVariants } from '@/animations/page';
import { LimitationOfLiabilityProps } from '@/types/terms/limitationOfLiability/limitation.of.liability.type';

import '../../../styles/components/terms/limitationOfLiability/LimitationOfLiabilility.scss';

const LimitationOfLiability = ({
  badge,
  title,
  description,
  headerIcon,
  intro,
  boundaryTitle,
  boundaryDescription,
  accentColor,
  exclusions,
  liabilityCap,
  className,
  style,
}: LimitationOfLiabilityProps) => {
  return (
    <motion.section
      id='limitation-of-liability'
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className={clsx('limitation-of-liability', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
      aria-labelledby='limitation-of-liability-title'
    >
      <div className='limitation-of-liability__container'>
        <TermsSectionHeader
          id='limitation-of-liability-title'
          badge={badge}
          title={title}
          description={description}
          icon={headerIcon}
          variants={containerVariants}
        />

        <div className='terms-liability__body'>
          <LiabilityIntro intro={intro} />

          <LiabilityBoundary
            title={boundaryTitle}
            description={boundaryDescription}
          />

          <LiabilityExclusions exclusions={exclusions} />

          <LiabilityCap {...liabilityCap} />
        </div>
      </div>
    </motion.section>
  );
};

export default LimitationOfLiability;
