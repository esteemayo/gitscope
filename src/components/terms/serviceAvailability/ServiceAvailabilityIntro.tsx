'use client';

import { motion } from 'framer-motion';
import '../../../styles/components/terms/serviceAvailability/ServiceAvailabilityIntro.scss';

const ServiceAvailabilityIntro = ({ intro }: { intro: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className='service-availability-intro'
    >
      <div className='service-availability-intro__line'>
        <span
          className='service-availability-intro__line--dot'
          aria-hidden='true'
        />
      </div>

      <p className='service-availability-intro__description'>{intro}</p>
    </motion.div>
  );
};

export default ServiceAvailabilityIntro;
