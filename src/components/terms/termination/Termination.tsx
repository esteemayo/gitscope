'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import TerminationEffects from './TerminationEffects';
import TerminationPath from './TerminationPath';
import TermsSectionHeader from '../TermsSectionHeader';
import TerminationIntro from './TerminationIntro';
import SurvivingObligations from './SurvivingObligations';

import { containerVariants } from '@/animations/page';
import { TerminationProps } from '@/types/terms/termination/termination.type';

import '../../../styles/components/terms/termination/Termination.scss';

const Termination = ({
  badge,
  title,
  description,
  headerIcon,
  intro,
  paths,
  effects,
  survivingObligations,
  accentColor,
  className,
  style,
}: TerminationProps) => {
  return (
    <motion.section
      id='termination'
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className={clsx('termination', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
      aria-labelledby='termination-title'
    >
      <div className='termination__container'>
        <TermsSectionHeader
          id='termination-title'
          badge={badge}
          title={title}
          description={description}
          icon={headerIcon}
          variants={containerVariants}
        />

        <div className='termination__body'>
          <TerminationIntro intro={intro} />

          <TerminationPath paths={paths} />

          <TerminationEffects effects={effects} />

          <SurvivingObligations obligations={survivingObligations} />
        </div>
      </div>
    </motion.section>
  );
};

export default Termination;
