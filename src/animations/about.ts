'use client';

import { Variants } from 'framer-motion';

export const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: 'easeOut',
      staggerChildren: 0.3,
      delayChildren: 0.1,
    },
  },
};
