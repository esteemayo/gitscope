'use client';

import { Activity, Clock3, X } from 'lucide-react';
import clsx from 'clsx';
import { useEffect, useMemo, useState } from 'react';

import GitHubLogoIcon from '../icons/GitHubLogoIcon';
import '../../styles/components/ui/GitHubRateLimit.scss';

type OpenMode = 'click' | 'hover' | null;

const GitHubRateLimit = () => {
  const [openMode, setOpenMode] = useState<OpenMode>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [now, setNow] = useState(() => Date.now());

  const limit = 60;
  const remaining = 40;
  const resetAt = 1790707788;

  const percentage = useMemo(() => {
    if (!limit) return 0;

    return Math.min(100, Math.max(0, (remaining / limit) * 100));
  }, [limit, remaining]);

  const resetDate = useMemo(() => {
    const date = new Date(resetAt);

    return Number.isNaN(date.getTime()) ? null : date;
  }, [resetAt]);

  const resetLabel = useMemo(() => {
    if (!resetDate) return 'Unknown';

    const diff = resetDate.getTime() - now;

    if (diff <= 0) {
      return 'Resetting now';
    }

    const minutes = Math.ceil(diff / 60000);

    if (minutes < 60) {
      return `Resets in ${minutes}m`;
    }

    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    if (remainingMinutes === 0) {
      return `Resets in ${hours}h`;
    }

    return `Resets in ${hours}h ${remainingMinutes}m`;
  }, [now, resetDate]);

  const handleMouseEnter = () => {
    if (isTouchDevice) return;

    setIsOpen(true);
    setOpenMode('hover');
  };

  const handleMouseLeave = () => {
    if (openMode === 'hover') {
      setIsOpen(false);
      setOpenMode(null);
    }
  };

  const handleToggle = () => {
    if (!isTouchDevice) {
      if (isOpen && openMode === 'click') {
        setIsOpen(false);
        setOpenMode(null);
        return;
      }

      setIsOpen(true);
      setOpenMode('click');
      return;
    }

    setIsOpen((value) => !value);
    setOpenMode(isOpen ? null : 'click');
  };

  const handleClose = () => {
    setIsOpen(false);
    setOpenMode(null);
  };

  const getStatus = () => {
    if (percentage <= 10) {
      return {
        label: 'Low',
        className: 'danger',
      };
    }

    if (percentage <= 30) {
      return {
        label: 'Limited',
        className: 'warning',
      };
    }

    return {
      label: 'Healthy',
      className: 'healthy',
    };
  };

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setIsTouchDevice(
        window.matchMedia('(hover: none), (pointer: coarse)').matches,
      );
    });

    return cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 60_000);

    return clearInterval(interval);
  }, []);

  const status = getStatus();

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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

        <span className='github-rate-limit__trigger--value'>
          {remaining} / {limit}
        </span>
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
            onClick={handleClose}
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
            <span className='github-rate-limit__stat-value'>{remaining}</span>

            <span className='github-rate-limit__stat-label'>remaining</span>
          </div>

          <div className='github-rate-limit__divider' />

          <div className='github-rate-limit__stat'>
            <span className='github-rate-limit__stat-value'>{limit}</span>

            <span className='github-rate-limit__stat-label'>limit</span>
          </div>

          <div
            className={clsx(
              'github-rate-limit__status-badge',
              status.className,
            )}
          >
            {status.label}
          </div>
        </div>

        <div className='github-rate-limit__progress-section'>
          <div className='github-rate-limit__progress-track'>
            <div
              className='github-rate-limit__progress-bar'
              style={{ width: `${percentage}%` }}
            />
          </div>

          <div className='github-rate-limit__progress-meta'>
            <span>{Math.round(percentage)}% available</span>

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
  );
};

export default GitHubRateLimit;
