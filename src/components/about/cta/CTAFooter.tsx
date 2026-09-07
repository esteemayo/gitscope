'use client';

import { motion } from 'framer-motion';
import '../../../styles/components/about/cta/CTAFooter.scss';

const CTAFooter = () => {
  return (
    <motion.div className='cta-footer'>
      <span>Built with accessiblity in mind</span>

      <span>•</span>

      <span>Privacy First</span>

      <span>•</span>

      <span>Powered by GitHub</span>
    </motion.div>
  );
};

export default CTAFooter;
