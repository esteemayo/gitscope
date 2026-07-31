'use client';

import { motion } from 'framer-motion';
import { Database, ShieldCheck } from 'lucide-react';

import GitHubLogoIcon from '@/components/icons/GitHubLogoIcon';
import '../../../styles/components/privacy/information/InformationIllustration.scss';

const InformationIllustration = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className='information-illustration'
    >
      <div className='information-illustration__hub'>
        <ShieldCheck
          size={42}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='information-illustration__node information-illustration__node--github'>
        <GitHubLogoIcon />
      </div>

      <div className='information-illustration__node information-illustration__node--database'>
        <Database size={28} role='img' aria-hidden='true' focusable='false' />
      </div>
    </motion.div>
  );
};

export default InformationIllustration;
