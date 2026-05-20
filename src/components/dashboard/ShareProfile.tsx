'use client';

import toast from 'react-hot-toast';
import { useState, useMemo, useEffect, useRef } from 'react';

import ActionButton from '../ui/ActionButton';

import BookmarkIcon from '../icons/BookmarkIcon';
import ShareIcon from '../icons/ShareIcon';
import ClipboardIcon from '../icons/ClipboardIcon';
import CheckIcon from '../icons/CheckIcon';
import BookmarkOutlineIcon from '../icons/BookmarkOutlineIcon';

import { isUserSaved, removeUser, saveUser } from '@/lib/storage';
import '../../styles/components/ShareProfile.scss';

const ShareProfile = ({ username }: { username: string }) => {
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);

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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    const currentIndex = buttonsRef.current.findIndex(
      (button) => button === document.activeElement
    );

    if (currentIndex === -1) return;

    if (e.key === 'ArrowRight') {
      e.preventDefault();

      const next = (currentIndex + 1) % buttonsRef.current.length;
      buttonsRef.current[next]?.focus();
    }

    if (e.key === 'ArrowLeft') {
      e.preventDefault();

      const prev =
        (currentIndex - 1 + buttonsRef.current.length) % buttonsRef.current.length;

      buttonsRef.current[prev]?.focus();
    }
  };

  useEffect(() => {
    buttonsRef.current[0]?.focus();
  }, []);

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
        onKeyDown={handleKeyDown}
        title='Share profile url'
        ref={(el) => { buttonsRef.current[0] = el }}
      />

      <ActionButton
        icon={isCopied ? <CheckIcon /> : <ClipboardIcon />}
        label={isCopied ? 'Copied' : 'Copy'}
        onClick={handleCopy}
        onKeyDown={handleKeyDown}
        title='Copy profile url'
        ref={(el) => { buttonsRef.current[1] = el }}
      />

      <ActionButton
        icon={isSaved ? <BookmarkIcon /> : <BookmarkOutlineIcon />}
        label={isSaved ? 'Saved' : 'Save'}
        onClick={handleToggleSave}
        onKeyDown={handleKeyDown}
        title='Save user profile'
        ref={(el) => { buttonsRef.current[2] = el }}
      />
    </div>
  );
};

export default ShareProfile;
