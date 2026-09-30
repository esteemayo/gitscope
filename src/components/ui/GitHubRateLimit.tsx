'use client';

import { useState } from 'react';
import clsx from 'clsx';
import { Activity, Clock3, X } from 'lucide-react';

import GitHubLogoIcon from '../icons/GitHubLogoIcon';
import '../../styles/components/ui/GitHubRateLimit.scss';

const GitHubRateLimit = () => {
  const [isOpen, setIsOpen] = useState(false);

  const limit = 60;
  const remaining = 60;
  const resetLabel = '';

  const handleToggle = () => {
    setIsOpen((value) => !value);
  };

  return (
    <div
      className={clsx('github-rate-limit', {
        'github-rate-limit open': isOpen,
      })}
    >
      <button
        type='button'
        onClick={handleToggle}
        className='github-rate-limit__trigger'
        aria-expanded={isOpen}
        aria-controls='github-rate-limit-panel'
      >
        <span className='github-rate-limit__trigger--icon'>
          <GitHubLogoIcon />
        </span>

        <span className='github-rate-limit__trigger--dot' />

        <span className='github-rate-limit__trigger--label'>API</span>

        <span className='github-rate-limit__trigger--value'>60 / 60</span>
      </button>

      <div
        id='github-rate-limit-panel'
        className='github-rate-limit__panel'
        aria-hidden={!isOpen}
      >
        <div className='github-rate-limit__panel-header'>
          <div className='github-rate-limit__service'>
            <div className='github-rate-limit__service-icon'>
              <GitHubLogoIcon />
            </div>

            <div className='github-rate-limit__service-group'>
              <span className='github-rate-limit__service-name'>
                GitHub API
              </span>

              <span className='github-rate-limit__service-status'>
                <span className='github-rate-limit__live-dot' />
                Connected
              </span>
            </div>
          </div>

          <button
            type='button'
            className='github-rate-limit__close-btn'
            aria-label='Close API rate limit'
          >
            <X
              size={16}
              strokeWidth={1.8}
              role='img'
              aria-hidden='true'
              focusable='false'
            />
          </button>
        </div>

        <div className='github-rate-limit__stats'>
          <div className='github-rate-limit__stat'>
            <span className='github-rate-limit__stat-value'>60</span>

            <span className='github-rate-limit__stat-label'>remaining</span>
          </div>

          <div className='github-rate-limit__divider' />

          <div className='github-rate-limit__stat'>
            <span className='github-rate-limit__stat-value'>60</span>

            <span className='github-rate-limit__stat-label'>limit</span>
          </div>

          <div className='github-rate-limit__status-badge'>label</div>
        </div>

        <div className='github-rate-limit__progress-section'>
          <div className='github-rate-limit__progress-track'>
            <div className='github-rate-limit__progress-bar' />

            <div className='github-rate-limit__progress-meta'>
              <span>100% available</span>

              <span>{limit - remaining} used</span>
            </div>
          </div>

          <div className='github-rate-limit__reset'>
            <div className='github-rate-limit__reset-icon'>
              <Clock3
                size={14}
                strokeWidth={1.8}
                role='img'
                aria-hidden='true'
                focusable='false'
              />
            </div>

            <div className='github-rate-limit__reset-content'>
              <span>Rate limit reset</span>

              <strong>{resetLabel}</strong>
            </div>
          </div>

          <div className='github-rate-limit__footer'>
            <Activity
              size={13}
              strokeWidth={1.8}
              role='img'
              aria-hidden='true'
              focusable='false'
            />

            <span>GitHub API usage for this session</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHubRateLimit;
