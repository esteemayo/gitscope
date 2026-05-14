'use client';

import { motion } from 'framer-motion';

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
}: GitHubSearchFormProps) => {
  return (
    <form
      onSubmit={onSubmit}
      className='github-search-form'
      noValidate
    >
      <Input
        ref={ref}
        type='text'
        id='username'
        name='username'
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        autoFocus={true}
      />

      {value.length > 0 && (
        <motion.button
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: -8, opacity: 1 }}
          exit={{ y: 8, opacity: 0 }}
          transition={{ duration: 0.2 }}
          type='button'
          onClick={onClear}
          className='github-search-form__icon'
        >
          <XCircleIcon />
        </motion.button>
      )}

      <Button type='submit'>Analyze profile</Button>
    </form>
  );
};

export default GitHubSearchForm;
