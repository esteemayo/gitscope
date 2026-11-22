'use client';

import { useState } from 'react';
import clsx from 'clsx';
import { Download } from 'lucide-react';

import { exportRepositoriesCSV } from '@/utils/dashboard/exportRepositoriesCSV';
import { ExportRepositoriesButtonProps } from '@/types/dashboard/repository/export.repositories.button.type';

import '../../../styles/components/dashboard/repositoryExplorer/ExportRepositoriesButton.scss';

const ExportRepositoriesButton = ({
  repositories,
  disabled,
  className,
  style,
}: ExportRepositoriesButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const isDisabled = disabled || isLoading;

  const handleExportCSV = async () => {
    if (isDisabled) return;

    setIsLoading(true);

    try {
      await new Promise<void>((resolve) => setTimeout(resolve, 1200));

      exportRepositoriesCSV(repositories);
    } catch (err: unknown) {
      console.log('Something went wrong: ', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      type='button'
      onClick={handleExportCSV}
      className={clsx('export-repositories-button', className)}
      style={style}
      disabled={isDisabled}
      aria-label='Export repositories to CSV'
      aria-disabled={isDisabled}
    >
      <Download
        size={16}
        strokeWidth={1.8}
        role='img'
        aria-hidden='true'
        focusable='false'
      />

      {isLoading ? (
        <span className='export-repositories-button__loading'>
          Exporting...
        </span>
      ) : (
        <span className='export-repositories-button__label'>
          Export CSV <small>({repositories.length})</small>
        </span>
      )}
    </button>
  );
};

export default ExportRepositoriesButton;
