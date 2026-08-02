'use client';

import { motion } from 'framer-motion';

import PrivacySectionHeader from '../PrivacySectionHeader';

import { containerVariants } from '@/animations/page';
import { GitHubPermissionsProps } from '@/types/privacy/permissions/github.permissions.type';

import '../../../styles/components/privacy/permissions/GitHubPermissions.scss';
import PermissionCard from './PermissionCard';
import PermissionOverview from './PermissionOverview';

const GitHubPermissions = ({
  badge,
  title,
  subtitle,
  overview,
  permissions,
}: GitHubPermissionsProps) => {
  return (
    <motion.section
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      id='github-permissions'
      className='github-permissions'
      aria-labelledby='github-permissions-title'
    >
      <div className='github-permissions__container'>
        <PrivacySectionHeader
          id='github-permissions-title'
          badge={badge}
          title={title}
          subtitle={subtitle}
          variants={containerVariants}
        />

        <div className='github-permissions__content'>
          <PermissionOverview items={overview} />

          <div className='github-permissions__grid'>
            {permissions.map((permission) => (
              <PermissionCard key={permission.id} {...permission} />
            ))}
          </div>
        </div>

        <motion.footer
          variants={containerVariants}
          className='github-permissions__footer'
        >
          <p className='github-permissions__footer--text'>
            GitScope only requests the minimum permissions required to provide
            analytics. Your repositories remain under your control at all times.
          </p>
        </motion.footer>
      </div>
    </motion.section>
  );
};

export default GitHubPermissions;
