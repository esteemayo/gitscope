'use client';

import { User2 } from 'lucide-react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

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
  const [error, setError] = useState(false);

  const initials = getInitials(name);
  const accentColor = getAvatarColor(name || alt);

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
          style={
            {
              '--size': `${size / 10}rem`,
              '--accent-color': accentColor,
            } as React.CSSProperties
          }
        >
          <div className='user-avatar__fallback'>
            {fallback === 'initials' && initials ? (
              <span className='user-avatar__fallback--initials'>
                {initials}
              </span>
            ) : (
              <User2
                size={20}
                strokeWidth={1.8}
                role='img'
                aria-hidden='true'
                focusable='false'
              />
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
        style={
          {
            '--size': `${size / 10}rem`,
            '--accent-color': accentColor,
          } as React.CSSProperties
        }
      >
        <Image
          key={src}
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
