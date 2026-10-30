import { BrainCircuit } from 'lucide-react';

import '../../../styles/components/dashboard/intelligence/IntelligenceEmptyState.scss';

const IntelligenceEmptyState = () => {
  return (
    <div className='intelligence-empty-state'>
      <div className='intelligence-empty-state__icon' aria-hidden='true'>
        <BrainCircuit
          size={24}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='intelligence-empty-state__content'>
        <h3 className='intelligence-empty-state__content--title'>
          Insights are not avaialable yet
        </h3>

        <p className='intelligence-empty-state__content--description'>
          We need repository or language data to generate meaningful insights
          for this profile.
        </p>
      </div>
    </div>
  );
};

export default IntelligenceEmptyState;
