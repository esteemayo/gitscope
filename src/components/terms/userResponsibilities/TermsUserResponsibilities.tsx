'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import UserResponsibilityIntro from './UserResponsibilityIntro';
import TermsSectionHeader from '../TermsSectionHeader';
import UserResponsibilityNotice from './UserResponsibilityNotice';
import UserResponsibilityItem from './UserResponsibilityItem';

import { containerVariants } from '@/animations/page';
import { TermsUserResponsibilitiesProps } from './../../../types/terms/userResponsibilities/terms.user.responsibilities.type';

import '../../../styles/components/terms/userResponsibilities/TermsUserResponsibilities.scss';

const TermsUserResponsibilities = ({
  badge,
  title,
  description,
  headerIcon,
  intro,
  items,
  notice,
  accentColor,
  className,
  style,
}: TermsUserResponsibilitiesProps) => {
  return (
    <motion.section
      id='user-responsibilities'
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className={clsx('terms-user-responsibilities', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
      aria-labelledby='terms-user-responsibilities-title'
    >
      <div className='terms-user-responsibilities__container'>
        <TermsSectionHeader
          id='terms-user-responsibilities-title'
          badge={badge}
          title={title}
          description={description}
          icon={headerIcon}
          variants={containerVariants}
        />

        <div className='terms-user-responsibilities__body'>
          <UserResponsibilityIntro intro={intro} />

          <div className='terms-user-responsibilities__grid'>
            {items.map((item, index) => (
              <UserResponsibilityItem key={item.id} {...item} index={index} />
            ))}
          </div>

          <UserResponsibilityNotice {...notice} />
        </div>
      </div>
    </motion.section>
  );
};

export default TermsUserResponsibilities;
