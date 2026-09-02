'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import ChangeLifecycle from './ChangeLifecycle';
import UserOptions from './UserOptions';
import TermsSectionHeader from '../TermsSectionHeader';
import ChangeReasons from './ChangeReasons';
import ChangesToTermsIntro from './ChangesToTermsIntro';

import { containerVariants } from '@/animations/page';
import { ChangesToTermsProps } from '@/types/terms/changesToTerms/changes.to.terms.type';

import '../../../styles/components/terms/changesToTerms/ChangesToTerms.scss';

const ChangesToTerms = ({
  badge,
  title,
  description,
  headerIcon,
  intro,
  reasons,
  lifecycle,
  options,
  accentColor,
  className,
  style,
}: ChangesToTermsProps) => {
  return (
    <motion.section
      id='changes-to-terms'
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className={clsx('changes-to-terms', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
      aria-labelledby='changes-to-terms-title'
    >
      <div className='changes-to-terms__container'>
        <TermsSectionHeader
          id='changes-to-terms-title'
          badge={badge}
          title={title}
          description={description}
          icon={headerIcon}
          variants={containerVariants}
        />

        <div className='changes-to-terms__body'>
          <ChangesToTermsIntro intro={intro} />

          <ChangeReasons reasons={reasons} />

          <ChangeLifecycle lifecycle={lifecycle} />

          <UserOptions options={options} />
        </div>
      </div>
    </motion.section>
  );
};

export default ChangesToTerms;
