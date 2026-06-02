'use client';

import { AnimatePresence, motion } from 'framer-motion';

import Button from '../ui/Button';
import Input from '../ui/Input';
import XCircleIcon from '../icons/XCircleIcon';

import { GitHubSearchFormProps } from '@/types/github.search.form.type';
import '../../styles/components/GitHubSearchForm.scss';

const GitHubSearchForm = ({
  ref,
  value,
  placeholder,
  onChange,
  onClear,
  onSubmit,
  onKeyDown,
}: GitHubSearchFormProps) => {
  return (
    <form onSubmit={onSubmit} className='github-search-form' noValidate>
      <Input
        ref={ref}
        type='text'
        id='username'
        name='username'
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
        autoFocus={true}
      />

      <AnimatePresence mode='wait'>
        {value && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.15 }}
            type='button'
            onClick={onClear}
            className='github-search-form__icon'
            aria-label={`Clear ${value}`}
          >
            <XCircleIcon />
          </motion.button>
        )}
      </AnimatePresence>

      <Button type='submit'>Analyze profile</Button>
    </form>
  );
};

export default GitHubSearchForm;
