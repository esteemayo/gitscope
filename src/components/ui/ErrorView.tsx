'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import Spinner from './Spinner';
import Default from '../icons/Default';

import { ErrorViewProps } from '@/types/error.view.type';
import '../../styles/components/ErrorView.scss';

const ErrorView = ({
  title,
  message,
  imageSrc,
  icon,
  action,
  meta,
  variant = 'default',
}: ErrorViewProps) => {
  const titleId = 'error-view-title';
  const descId = 'error-view-description';

  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    if (!action?.onClick) return;

    setIsLoading(true);
    
    await new Promise((r) => setTimeout(r, 300));
    await action?.onClick();
  };

  return (
    <section
      className='error-view'
      aria-labelledby={titleId}
      aria-describedby={descId}
      role='alert'
    >
      <div className='error-view__container'>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`error-view__card ${variant}`}
        >
          {imageSrc ? (
            <Image
              src={imageSrc}
              width={120}
              height={120}
              alt='Error illustration'
              className='error-view__image'
            />
          ) : (
            <div className='error-view__icon'>
              {icon || <Default />}
            </div>
          )}

          <h1 id={titleId} className='error-view__title'>
            {title}
          </h1>

          <p id={descId} className='error-view__desc'>{message}</p>

          {action && (
            <div className='error-view__action' role='group' aria-label='Error action'>
              {action && (
                <button
                  type='button'
                  onClick={handleClick}
                  className='error-view__action--btn'
                >
                  {isLoading ? <Spinner size='md' /> : action.label}
                </button>
              )}
            </div>
          )}

          {meta && <span className='error-view__meta'>{meta}</span>}
        </motion.div>
      </div>
    </section>
  );
};

export default ErrorView;
