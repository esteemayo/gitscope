'use client';

import { AnimatePresence, motion } from 'framer-motion';

import UserAvatar from '../ui/UserAvatar';
import XCircleIcon from '../icons/XCircleIcon';

import { CompareUserInputProps } from '@/types/compare/compare.user.input.type';
import '../../styles/components/CompareUserInput.scss';

const CompareUserInput = ({
  name,
  label,
  value,
  placeholder,
  profile,
  onClear,
  onChange,
}: CompareUserInputProps) => {
  return (
    <div className='compare-user-input'>
      <label htmlFor={name} className='compare-user-input__label'>
        {label}
      </label>

      <span className='compare-user-input__hint'>GitHub username</span>

      <div className='compare-user-input__field'>
        {profile && (
          <UserAvatar
            src={profile.avatar_url}
            name={profile.name!}
            size={32}
            alt={profile.name!}
          />
        )}

        <input
          id={name}
          name={name}
          type='text'
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className='compare-user-input__field--input'
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
              className='compare-user-input__field--clear'
              aria-label={`Clear ${label}`}
            >
              <XCircleIcon />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CompareUserInput;
