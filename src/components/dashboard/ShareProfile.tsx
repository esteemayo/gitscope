'use client';

import { useEffect, useState } from 'react';

import SavedButton from '../ui/SavedButton';
import CopyButton from '../ui/CopyButton';
import ShareButton from '../ui/ShareButton';

import '../../styles/components/ShareProfile.scss';

const ShareProfile = ({ username }: { username: string }) => {
  const [url, setUrl] = useState('');
  const [isCopied, setIsCopied] = useState(false);

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

  useEffect(() => {
    const url = `${window.location.origin}/user?id=${username}`;
    setUrl(url);
  }, [username]);

  return (
    <div className='share-profile'>
      <ShareButton onClick={handleShare} />
      <CopyButton isCopied={isCopied} onClick={handleCopy} />
      <SavedButton onClick={handleSave} />
    </div>
  );
};

export default ShareProfile;
