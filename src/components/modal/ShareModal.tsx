'use client';

import { QRCodeSVG } from 'qrcode.react';
import { useState } from 'react';
import { Check, Copy, Share2, X } from 'lucide-react';

import '../../styles/components/modal/ShareModal.scss';

interface ShareModalProps {
  isOpen: boolean;
  profileUrl: string;
  username: string;
}

const ShareModal = ({ isOpen, profileUrl, username }: ShareModalProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isCopyError, setIsCopyError] = useState(false);

  if (!isOpen) {
    return null;
  }

  return (
    <div className='share-modal'>
      <div className='share-modal__backdrop'>
        <section
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
                value={''}
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

            <button type='button' aria-label='Copy profile URL'>
              {isCopied ? (
                <Check
                  size={18}
                  strokeWidth={1.8}
                  role='img'
                  aria-hidden='true'
                  focusable='false'
                />
              ) : (
                <Copy
                  size={18}
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

          <button type='button' className='share-modal__share-button'>
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
};

export default ShareModal;
