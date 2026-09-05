'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import UserContentLifecycle from './UserContentLifecycle';
import UserContentIntro from './UserContentIntro';
import UserContentBoundaries from './UserContentBoundaries';
import UserContentNotice from './UserContentNotice';
import UserContentPermissions from './UserContentPermissions';
import TermsSectionHeader from '../TermsSectionHeader';

import { containerVariants } from '@/animations/page';
import { TermsUserContentProps } from '@/types/terms/userContent/terms.user.content.type';

import '../../../styles/components/terms/userContent/TermsUserContent.scss';

const TermsUserContent = ({
  badge,
  title,
  description,
  headerIcon,
  intro,
  lifecycle,
  permissions,
  boundaries,
  notice,
  accentColor,
  className,
  style,
}: TermsUserContentProps) => {
  return (
    <motion.section
      id='user-content'
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className={clsx('terms-user-content', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
      aria-labelledby='terms-user-content-title'
    >
      <div className='terms-user-content__container'>
        <TermsSectionHeader
          id='terms-user-content-title'
          badge={badge}
          title={title}
          description={description}
          icon={headerIcon}
          variants={containerVariants}
        />

        <div className='terms-user-content__body'>
          <UserContentIntro intro={intro} />

          <UserContentLifecycle steps={lifecycle} />

          <UserContentPermissions items={permissions} />

          <UserContentBoundaries items={boundaries} />

          <UserContentNotice {...notice} />
        </div>
      </div>
    </motion.section>
  );
};

export default TermsUserContent;
