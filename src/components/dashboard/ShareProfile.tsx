'use client';

import toast from 'react-hot-toast';
import { useState, useMemo, useEffect } from 'react';

import ActionButton from '../ui/ActionButton';

import BookmarkIcon from '../icons/BookmarkIcon';
import ShareIcon from '../icons/ShareIcon';
import ClipboardIcon from '../icons/ClipboardIcon';
import CheckIcon from '../icons/CheckIcon';
import BookmarkOutlineIcon from '../icons/BookmarkOutlineIcon';

import { isUserSaved, removeUser, saveUser } from '@/lib/storage';
import '../../styles/components/ShareProfile.scss';

const ShareProfile = ({ username }: { username: string }) => {
  const [isSaved, setIsSaved] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const url = useMemo(() =>
    `${window.location.origin}/${username}`,
    [username]
  );

  const handleCopy = async () => {
    if (!url) return;

    await navigator.clipboard.writeText(url);
    setIsCopied(true);

    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: `${username}'s GitScope Profile`,
        url,
      });
    } else {
      handleCopy();
    }
  };

  const handleToggleSave = () => {
    const user = {
      username: 'esteemayo',
      avatar: '/avatar-2.jpg',
      name: 'Emmanuel Adebayo',
    };

    if (isSaved) {
      removeUser(username);
      toast.success('Removed');
    } else {
      saveUser(user);
      toast.success('Saved');
      console.log('profile saved successfully!', user);
    }
  };

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setIsSaved(isUserSaved(username));
    });

    const handler = () => {
      setIsSaved(isUserSaved(username));
    };

    window.addEventListener('saved:updated', handler);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('saved:updated', handler);
    };
  }, [username]);

  return (
    <div className='share-profile'>
      <ActionButton
        icon={<ShareIcon />}
        label='Share'
        onClick={handleShare}
        title='Share profile url'
      />

      <ActionButton
        icon={isCopied ? <CheckIcon /> : <ClipboardIcon />}
        label={isCopied ? 'Copied' : 'Copy'}
        onClick={handleCopy}
        title='Copy profile url'
      />

      <ActionButton
        icon={isSaved ? <BookmarkIcon /> : <BookmarkOutlineIcon />}
        label={isSaved ? 'Saved' : 'Save'}
        onClick={handleToggleSave}
        title='Save user profile'
      />
    </div>
  );
};

export default ShareProfile;
