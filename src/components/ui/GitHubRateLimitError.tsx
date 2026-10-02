'use client';

import { AlertCircle, RotateCw } from 'lucide-react';
import { GitHubRateLimitErrorProps } from '@/types/ui/github-rate-limit.type';

import '../../styles/components/ui/GitHubRateLimitError.scss';

const GitHubRateLimitError = ({ onRetry }: GitHubRateLimitErrorProps) => {
  return (
    <button
      type='button'
      onClick={onRetry}
      className='github-rate-limit-error'
      aria-label='Unable to load GitHub API rate limit. Retry.'
    >
      <span className='github-rate-limit-error__icon'>
        <AlertCircle
          size={14}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </span>

      <span className='github-rate-limit-error__label'>API unavailable</span>

      <RotateCw
        size={13}
        strokeWidth={1.8}
        role='img'
        aria-hidden='true'
        focusable='false'
        className='github-rate-limit-error__retry-icon'
      />
    </button>
  );
};

export default GitHubRateLimitError;
