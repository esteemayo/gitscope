'use client';

import { motion } from 'framer-motion';
import { FolderSearch } from 'lucide-react';

import { EmptyStateProps } from '@/types/empty.state.type';
import '../../styles/components/EmptyState.scss';

const EmptyState = ({ title, description }: EmptyStateProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.2 }}
      className='empty-state'
      role='alert'
      aria-live='polite'
    >
      <FolderSearch size={36} />

      <h3 className='empty-state__title'>{title}</h3>

      <span className='empty-state__desc'>{description}</span>
    </motion.div>
  );
};

export default EmptyState;
