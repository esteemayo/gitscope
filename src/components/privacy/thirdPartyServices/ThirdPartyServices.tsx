'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import ThirdPartyServiceCard from './ThirdPartyServiceCard';
import ThirdPartyDataFlow from './ThirdPartyDataFlow';
import ThirdPartyServicesNotice from './ThirdPartyServicesNotice';
import PrivacySectionHeader from '../PrivacySectionHeader';

import { containerVariants } from '@/animations/page';
import { ThirdPartyServicesProps } from '@/types/privacy/thirdPartyServices/third.party.services.type';

import '../../../styles/components/privacy/thirdPartyServices/ThirdPartyServices.scss';

const ThirdPartyServices = ({
  badge,
  title,
  subtitle,
  services,
  dataFlow,
  notice,
  className,
  style,
}: ThirdPartyServicesProps) => {
  return (
    <motion.section
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className={clsx('third-party-services', className)}
      style={style}
      aria-labelledby='third-party-services-title'
    >
      <div className='third-party-services__container'>
        <PrivacySectionHeader
          id='cookies-local-storage-title'
          badge={badge}
          title={title}
          subtitle={subtitle}
          variants={containerVariants}
        />

        <div className='third-party-services__grid'>
          {services.map((service) => (
            <motion.div key={service.id} variants={containerVariants}>
              <ThirdPartyServiceCard {...service} />
            </motion.div>
          ))}
        </div>

        <ThirdPartyDataFlow {...dataFlow} />

        <ThirdPartyServicesNotice {...notice} />
      </div>
    </motion.section>
  );
};

export default ThirdPartyServices;
