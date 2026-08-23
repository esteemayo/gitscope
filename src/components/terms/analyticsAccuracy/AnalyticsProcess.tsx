'use client';

import AnalyticsCalculationFlow from './AnalyticsCalculationFlow';
import { AnalyticsProcessProps } from '@/types/terms/analyticsAccuracy/analytics.process.type';

import '../../../styles/components/terms/analyticsAccuracy/AnalyticsProcess.scss';

const AnalyticsProcess = ({ flow }: AnalyticsProcessProps) => {
  return (
    <section
      className='analytics-process'
      aria-labelledby='analytics-process-title'
    >
      <div className='analytics-process__heading'>
        <span className='analytics-process__heading--label'>
          Processing model
        </span>

        <h3
          id='analytics-processing-title'
          className='analytics-process__heading--title'
        >
          From GitHub data to GitScope insight
        </h3>

        <p className='analytics-process__heading--description'>
          The analytics pipeline moves through several stages before information
          becomes a metric displayed in the interface.
        </p>
      </div>

      <AnalyticsCalculationFlow steps={flow} />
    </section>
  );
};

export default AnalyticsProcess;
