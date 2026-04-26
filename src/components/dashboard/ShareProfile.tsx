'use client';

import { useEffect, useState } from 'react';


import CheckIcon from '../icons/CheckIcon';
import ShareIcon from '../icons/ShareIcon';
import ClipboardIcon from '../icons/ClipboardIcon';

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

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setUrl(`${window.location.origin}/user?id=${username}`);
    })

    return cancelAnimationFrame(raf);
  }, [username]);

  return (
    <div className='share-profile'>
      <button
        type='button'
        onClick={handleShare}
        className='share-profile__share-btn'
        title='Share profile url'
      >
        <ShareIcon />
        <span>Share</span>
      </button>

      <button
        type='button'
        onClick={handleCopy}
        className='share-profile__copy-btn'
        title='Copy profile url'
      >
        {isCopied ? <CheckIcon /> : <ClipboardIcon />}
        <span>{isCopied ? 'Copied' : 'Copy'}</span>
      </button>
    </div>
  );
};

export default ShareProfile;
