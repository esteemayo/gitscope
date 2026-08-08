'use client';

import { motion } from 'framer-motion';

import SecurityLayers from './SecurityLayers';
import TrustBanner from './TrustBanner';
import SecurityOverview from './SecurityOverview';
import SecurityCard from './SecurityCard';
import PrivacySectionHeader from '../PrivacySectionHeader';

import { containerVariants } from '@/animations/page';
import { DataStorageSecurityProps } from '@/types/privacy/dataStorageSecurity/data.storage.security.type';

import '../../../styles/components/privacy/dataStorage/DataStorageSecurity.scss';

const DataStorageSecurity = ({
  badge,
  title,
  subtitle,
  overview,
  trustItems,
  features,
  securityLayersBadge,
  securityLayersTitle,
  securityLayersSubtitle,
  layers,
  securityOutcome,
  trustBanner,
}: DataStorageSecurityProps) => {
  return (
    <motion.section
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className='data-storage-security'
      aria-labelledby='data-storage-security-title'
      aria-describedby='data-storage-security-description'
    >
      <div className='data-storage-security__container'>
        <p id='data-storage-security-description' className='sr-only'>
          Learn how GitScope protects your information through secure
          authentication, encrypted communication, read-only access, and
          privacy-focused storage practices.
        </p>

        <PrivacySectionHeader
          id='data-storage-security-title'
          badge={badge}
          title={title}
          subtitle={subtitle}
          variants={containerVariants}
        />

        <div className='data-storage-security__body'>
          <SecurityOverview items={overview} trustItems={trustItems} />

          <div className='data-storage-security__content'>
            <div className='data-storage-security__content--grid'>
              {features.map((feature) => (
                <motion.div key={feature.id} variants={containerVariants}>
                  <SecurityCard {...feature} />
                </motion.div>
              ))}
            </div>

            <SecurityLayers
              badge={securityLayersBadge}
              title={securityLayersTitle}
              subtitle={securityLayersSubtitle}
              items={layers}
              outcome={securityOutcome}
            />
          </div>
        </div>

        <TrustBanner {...trustBanner} />
      </div>
    </motion.section>
  );
};

export default DataStorageSecurity;
