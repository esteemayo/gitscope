'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';


import InformationCircle from '../icons/InformationCircle';
import '../../styles/components/Tooltip.scss';

const Tooltip = ({ text }: { text: string }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <span
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
      className='tooltip'
    >
      <button type='button'>
        <InformationCircle />
      </button>

      {isShow && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className='tooltip__content'
        >
          {text}
        </motion.span>
      )}
    </span>
  );
};

export default Tooltip;
