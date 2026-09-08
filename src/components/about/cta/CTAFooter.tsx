'use client';

import { motion } from 'framer-motion';
import '../../../styles/components/about/cta/CTAFooter.scss';

const CTAFooter = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className='cta-footer'
    >
      <span>Built with accessiblity in mind</span>

      <span>•</span>

      <span>Privacy First</span>

      <span>•</span>

      <span>Powered by GitHub</span>
    </motion.div>
  );
};

export default CTAFooter;
