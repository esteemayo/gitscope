'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import PrivacyDataNotice from './PrivacyDataNotice';
import SectionIntro from '../../ui/SectionIntro';
import PrivacyControlCenter from './PrivacyControlCenter';
import PrivacyStatement from './PrivacyStatement';
import PrivacyDataCategories from './PrivacyDataCategories';
import PrivacyPrinciples from './PrivacyPrinciples';

import { containerVariants } from '@/animations/page';
import { TermsPrivacyDataProps } from '@/types/terms/privacyData/terms.privacy.data.type';

import '../../../styles/components/terms/privacyData/TermsPrivacyData.scss';

const TermsPrivacyData = ({
  badge,
  title,
  description,
  headerIcon,
  intro,
  controls,
  principles,
  dataCategories,
  notice,
  accentColor,
  className,
  style,
}: TermsPrivacyDataProps) => {
  return (
    <motion.section
      id='privacy-data-protection'
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className={clsx('terms-privacy-data', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
      aria-labelledby='terms-privacy-data-title'
    >
      <div className='terms-privacy-data__container'>
        <SectionIntro
          id='terms-privacy-data-title'
          badge={badge}
          title={title}
          description={description}
          icon={headerIcon}
          variants={containerVariants}
        />

        <div className='terms-privacy-data__body'>
          <PrivacyStatement intro={intro} />

          <PrivacyControlCenter controls={controls} />

          <PrivacyPrinciples principles={principles} />

          <PrivacyDataCategories categories={dataCategories} />

          <PrivacyDataNotice {...notice} />
        </div>
      </div>
    </motion.section>
  );
};

export default TermsPrivacyData;
