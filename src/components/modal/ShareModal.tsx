'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Check, Copy, Share2, X } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

import { useOverlay } from '@/hooks/useOverlay';
import { usePortal } from '@/hooks/usePortal';
import { ShareModalProps } from '@/types/modal/share.modal.type';

import '../../styles/components/modal/ShareModal.scss';

const ShareModal = ({
  isOpen,
  profileUrl,
  username,
  onClose,
}: ShareModalProps) => {
  const ref = useRef<HTMLElement | null>(null);

  const [isCopied, setIsCopied] = useState(false);
  const [isCopyError, setIsCopyError] = useState(false);

  useOverlay(ref, { isOpen, onClose });
  const { portalId } = usePortal('overlay-root');

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const copyProfileUrl = async () => {
    setIsCopyError(false);

    try {
      await navigator.clipboard.writeText(profileUrl);
      setIsCopied(true);
    } catch {
      setIsCopyError(false);
    }
  };

  const shareProfileHandler = async () => {
    if (!navigator.share) {
      await copyProfileUrl();
      return;
    }

    try {
      await navigator.share({
        title: `${username} on GitScope`,
        text: `Explore ${username}'s GitHub analytics on GitScope.`,
        url: profileUrl,
      });
    } catch (err) {
      if (err instanceof Error && err.name !== 'AbortError') {
        await copyProfileUrl();
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsCopied(false), 1200);

    return () => clearTimeout(timer);
  }, [isCopied]);

  if (!isOpen) {
    return null;
  }

  const modalContent = (
    <div className='share-modal'>
      <div className='share-modal__backdrop' onMouseDown={handleClose}>
        <section
          ref={ref}
          className='share-modal__panel'
          role='dialog'
          aria-modal='true'
          aria-labelledby='share-modal-title'
        >
          <header className='share-modal__header'>
            <div className='share-modal__heading'>
              <span className='share-modal__heading--eyebrow'>
                Share developer profile
              </span>

              <h2
                id='share-modal-title'
                className='share-modal__heading--title'
              >
                Share on GitScope
              </h2>
            </div>

            <button
              type='button'
              onClick={onClose}
              className='share-modal__btn-close'
              aria-label='Close share dialog'
            >
              <X
                size={20}
                strokeWidth={1.8}
                role='img'
                aria-hidden='true'
                focusable='false'
              />
            </button>
          </header>

          <div className='share-modal__qr-wrapper'>
            <div className='share-modal__qr-frame'>
              <QRCodeSVG
                value={profileUrl}
                size={188}
                level='H'
                marginSize={2}
                title={`QR code for ${username}'s GitScope profile`}
                bgColor='#FFFFFF'
                fgColor='#111827'
              />
            </div>

            <div className='share-modal__qr-content'>
              <h3 className='share-modal__qr-content--title'>
                Scan to explore this profile
              </h3>

              <p className='share-modal__qr-content--description'>
                Open this developer dashboard on another device.
              </p>
            </div>
          </div>

          <div className='share-modal__share-url'>
            <span>{profileUrl}</span>

            <button
              type='button'
              onClick={copyProfileUrl}
              aria-label='Copy profile URL'
            >
              {isCopied ? (
                <Check
                  size={16}
                  strokeWidth={1.8}
                  role='img'
                  aria-hidden='true'
                  focusable='false'
                />
              ) : (
                <Copy
                  size={16}
                  strokeWidth={1.8}
                  role='img'
                  aria-hidden='true'
                  focusable='false'
                />
              )}
            </button>
          </div>

          {isCopyError && (
            <p className='share-modal__copy-error' role='alert'>
              Could not copy automatically. Select and copy the URL above.
            </p>
          )}

          <button
            type='button'
            onClick={shareProfileHandler}
            className='share-modal__share-button'
          >
            <Share2
              size={17}
              strokeWidth={1.8}
              role='img'
              aria-hidden='true'
              focusable='false'
            />
            Share profile
          </button>
        </section>
      </div>
    </div>
  );

  return portalId ? createPortal(modalContent, portalId) : undefined;
};

export default ShareModal;
