'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import ThirdPartyServiceMap from './ThirdPartyServiceMap';
import ThirdPartyBoundary from './ThirdPartyBoundary';
import ThirdPartyServiceIntro from './ThirdPartyServiceIntro';
import TermsSectionHeader from '../TermsSectionHeader';

import { containerVariants } from '@/animations/page';
import { ThirdPartyServicesProps } from '@/types/terms/thirdPartyServices/third.party.services.type';

import '../../../styles/components/terms/thirdPartyServices/ThirdPartyServices.scss';

const ThirdPartyServices = ({
  badge,
  title,
  description,
  headerIcon,
  intro,
  services,
  boundaries,
  accentColor,
  className,
  style,
}: ThirdPartyServicesProps) => {
  return (
    <motion.section
      id='third-party-services'
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className={clsx('third-party-services', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
      aria-labelledby='third-party-services-title'
    >
      <div className='third-party-services__container'>
        <TermsSectionHeader
          id='third-party-services-title'
          badge={badge}
          title={title}
          description={description}
          icon={headerIcon}
          variants={containerVariants}
        />

        <div className='third-party-services__body'>
          <ThirdPartyServiceIntro intro={intro} />

          <ThirdPartyServiceMap services={services} />

          <ThirdPartyBoundary boundaries={boundaries} />
        </div>
      </div>
    </motion.section>
  );
};

export default ThirdPartyServices;
