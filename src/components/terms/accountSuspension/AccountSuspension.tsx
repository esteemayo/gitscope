'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import TermsSectionHeader from '../TermsSectionHeader';
import AccountStatusFlow from './AccountStatusFlow';
import EnforcementNotice from './EnforcementNotice';
import SuspensionReasons from './SuspensionReasons';
import AccountSuspensionIntro from './AccountSuspensionIntro';

import { containerVariants } from '@/animations/page';
import { AccountSuspensionProps } from '@/types/terms/accountSuspension/account.suspension.type';

import '../../../styles/components/terms/accountSuspension/AccountSuspension.scss';

const AccountSuspension = ({
  badge,
  title,
  description,
  headerIcon,
  intro,
  statusSteps,
  reasons,
  notice,
  accentColor,
  className,
  style,
}: AccountSuspensionProps) => {
  return (
    <motion.section
      id='account-suspension'
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className={clsx('account-suspension', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
      aria-labelledby='account-suspension-title'
    >
      <div className='account-suspension__container'>
        <TermsSectionHeader
          id='account-suspension-title'
          badge={badge}
          title={title}
          description={description}
          icon={headerIcon}
          variants={containerVariants}
        />

        <div className='account-suspension__body'>
          <AccountSuspensionIntro intro={intro} />

          <AccountStatusFlow statusSteps={statusSteps} />

          <SuspensionReasons reasons={reasons} />

          <EnforcementNotice {...notice} />
        </div>
      </div>
    </motion.section>
  );
};

export default AccountSuspension;
