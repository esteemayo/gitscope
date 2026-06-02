'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

import DefaultAvatarIcon from '../icons/DefaultAvatarIcon';

import { getInitials } from '@/utils/getInitials';
import { getAvatarColor } from '@/utils/avatarColors';

import '../../styles/components/UserAvatar.scss';

interface UserAvatarProps {
  src?: string;
  alt: string;
  name?: string;
  size?: number;
  fallback?: 'initials' | 'icon';
}

const UserAvatar = ({
  src,
  alt,
  name,
  size = 40,
  fallback = 'initials',
}: UserAvatarProps) => {
  const initials = getInitials(name);
  const bcg = getAvatarColor(name || alt);

  const [error, setError] = useState(false);

  const showFallback = !src || error;

  if (showFallback) {
    return (
      <AnimatePresence mode='wait'>
        <motion.div
          key={fallback}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='user-avatar'
        >
          <div
            className='user-avatar__fallback'
            style={{
              width: size,
              height: size,
              backgroundColor: `${bcg}20`,
              color: bcg,
            }}
          >
            {fallback === 'initials' && initials ? (
              <span className='user-avatar__fallback--initials'>
                {initials}
              </span>
            ) : (
              <DefaultAvatarIcon size={size * 0.7} />
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className='user-avatar'
      >
        <Image
          src={src}
          width={size}
          height={size}
          alt={alt}
          className='user-avatar__img'
          onError={() => setError(true)}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default UserAvatar;
