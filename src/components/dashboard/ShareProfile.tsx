'use client';

import { useState, useMemo } from 'react';

import SavedButton from '../ui/SavedButton';
import CopyButton from '../ui/CopyButton';
import ShareButton from '../ui/ShareButton';

import '../../styles/components/ShareProfile.scss';

const ShareProfile = ({ username }: { username: string }) => {
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

  const handleSave = () => {
    const user = {
      username: 'user.login',
      avatar: 'user.avatar_url',
      name: 'user.name',
    };

    console.log('profile saved successfully!', user);
  };

  return (
    <div className='share-profile'>
      <ShareButton onClick={handleShare} />
      <CopyButton isCopied={isCopied} onClick={handleCopy} />
      <SavedButton onClick={handleSave} />
    </div>
  );
};

export default ShareProfile;
