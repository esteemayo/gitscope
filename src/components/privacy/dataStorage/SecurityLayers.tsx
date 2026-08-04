'use client';

import { motion } from 'framer-motion';

import SecurityLayer from './SecurityLayer';

import { containerVariants } from '@/animations/page';
import { SecurityLayersProps } from '@/types/privacy/dataStorageSecurity/security.layers.type';

import '../../../styles/components/privacy/dataStorage/SecurityLayers.scss';

const SecurityLayers = ({
  badge,
  title,
  subtitle,
  items,
}: SecurityLayersProps) => {
  return (
    <section className='security-layers'>
      <motion.header
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='security-layers__header'
      >
        <span className='security-layers__badge'>{badge}</span>

        <h3 className='security-layers__title'>{title}</h3>

        <p className='security-layers__subtitle'>{subtitle}</p>
      </motion.header>

      <div className='security-layers__pipeline'>
        {items.map((item, index) => (
          <motion.div key={item.id}>
            <SecurityLayer {...item} isLast={index === items.length - 1} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SecurityLayers;
