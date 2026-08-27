'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';
import { FileText } from 'lucide-react';

import UserContentLifecycle from './UserContentLifecycle';
import UserContentNotice from './UserContentNotice';
import UserContentBoundaries from './UserContentBoundaries';
import TermsSectionHeader from '../TermsSectionHeader';
import UserContentPermissions from './UserContentPermissions';

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
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className='terms-user-content__intro'
          >
            <div className='terms-user-content__intro-icon'>
              <FileText
                size={20}
                strokeWidth={1.8}
                role='img'
                aria-hidden='true'
                focusable='false'
              />
            </div>

            <div className='terms-user-content__intro-content'>
              <span className='terms-user-content__intro-content--label'>
                Your content
              </span>

              <p className='terms-user-content__intro-content--description'>
                {intro}
              </p>
            </div>
          </motion.div>

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
