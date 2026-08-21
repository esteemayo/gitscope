'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import TermsSectionHeader from '../TermsSectionHeader';
import AcceptableUseGroup from './AcceptableUseGroup';
import AcceptableUseNotice from './AcceptableUseNotice';

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
        <TermsSectionHeader
          id='terms-acceptable-use-title'
          badge={badge}
          title={title}
          description={description}
          icon={headerIcon}
          variants={containerVariants}
        />

        <div className='terms-acceptable-use__body'>
          <div className='terms-acceptable-use__intro'>
            <span className='terms-acceptable-use__intro--label'>
              Usage guidelines
            </span>

            <p className='terms-acceptable-use__intro--description'>{intro}</p>
          </div>

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
