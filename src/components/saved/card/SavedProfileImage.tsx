'use client';

import { User2 } from 'lucide-react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import { getInitials } from '@/utils/getInitials';
import { getAvatarColor } from '@/utils/avatarColors';

import { SavedProfileImageProps } from '@/types/saved/card/saved.profile.image.type';
import '../../../styles/components/saved/card/SavedProfileImage.scss';

const SavedProfileImage = ({
  src,
  alt,
  name,
  size,
  fallback = 'initials',
}: SavedProfileImageProps) => {
  const [error, setError] = useState(false);

  const initials = getInitials(name);
  const accentColor = getAvatarColor(name ?? alt);

  const showFallback = !src || error;

  if (showFallback) {
    return (
      <AnimatePresence mode='wait'>
        <motion.div
          key={fallback}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className='saved-profile-image__fallback'
        >
          {initials && fallback === 'initials' ? (
            <span className='saved-profile-image__fallback--initials'>
              {initials}
            </span>
          ) : (
            <User2
              size={20}
              className='saved-profile-image__fallback--default'
              strokeWidth={1.8}
              role='img'
              aria-hidden='true'
              focusable='false'
            />
          )}
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
        className='saved-profile-image'
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
          className='saved-profile-image__avatar'
          onError={() => setError(true)}
        />

        <span className='saved-profile-image__status' aria-hidden='true' />
      </motion.div>
    </AnimatePresence>
  );
};

export default SavedProfileImage;
