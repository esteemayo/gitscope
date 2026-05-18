'use client';

import toast from 'react-hot-toast';
import { useState, useMemo, useEffect } from 'react';

import SavedButton from '../ui/SavedButton';
import CopyButton from '../ui/CopyButton';
import ShareButton from '../ui/ShareButton';

import { isUserSaved, removeUser, saveUser } from '@/lib/storage';
import '../../styles/components/ShareProfile.scss';

const ShareProfile = ({ username }: { username: string }) => {
  const [isSaved, setIsSaved] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const url = useMemo(() =>
    `${window.location.origin}/user?id=${username}`,
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
    setIsSaved(isUserSaved(username)); // user.login

    const handler = () => {
      setIsSaved(isUserSaved(username));
    };

    window.addEventListener('saved:updated', handler);
    return () => window.removeEventListener('saved:updated', handler);
  }, [username]);

  return (
    <div className='share-profile'>
      <ShareButton onClick={handleShare} />
      <CopyButton isCopied={isCopied} onClick={handleCopy} />
      <SavedButton isSaved={isSaved} onClick={handleToggleSave} />
    </div>
  );
};

export default ShareProfile;
