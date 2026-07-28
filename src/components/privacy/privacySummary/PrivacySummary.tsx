import { PrivacySummaryProps } from '@/types/privacy/privacySummary/privacy.summary.type';
import '../../../styles/components/privacy/privacySummary/PrivacySummary.scss';

const PrivacySummary = ({ title, subtitle, items }: PrivacySummaryProps) => {
  return (
    <section
      className='privacy-summary'
      aria-labelledby='privacy-summary-title'
    >
      <div className='privacy-summary__container'>PrivacySummary</div>
    </section>
  );
};

export default PrivacySummary;
