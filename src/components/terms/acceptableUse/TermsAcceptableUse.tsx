'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import AcceptableUseGroup from './AcceptableUseGroup';
import SectionIntro from '../../ui/SectionIntro';
import AcceptableUseNotice from './AcceptableUseNotice';
import AcceptableUseIntro from './AcceptableUseIntro';

import { containerVariants } from '@/animations/page';
import { TermsAcceptableUseProps } from '@/types/terms/acceptableUse/terms.acceptable.use.type';

import '../../../styles/components/terms/acceptableUse/TermsAcceptableUse.scss';

const TermsAcceptableUse = ({
  badge,
  title,
  description,
  headerIcon,
  intro,
  groups,
  notice,
  accentColor,
  className,
  style,
}: TermsAcceptableUseProps) => {
  return (
    <motion.section
      id='acceptable-use'
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className={clsx('terms-acceptable-use', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
      aria-labelledby='terms-acceptable-use-title'
    >
      <div className='terms-acceptable-use__container'>
        <SectionIntro
          id='terms-acceptable-use-title'
          title={title}
          badge={badge}
          description={description}
          icon={headerIcon}
          variants={containerVariants}
        />

        <div className='terms-acceptable-use__body'>
          <AcceptableUseIntro intro={intro} />

          <div className='terms-acceptable-use__groups'>
            {groups.map((group, index) => (
              <AcceptableUseGroup
                key={group.id}
                {...group}
                groupIndex={index}
              />
            ))}
          </div>

          <AcceptableUseNotice {...notice} />
        </div>
      </div>
    </motion.section>
  );
};

export default TermsAcceptableUse;
