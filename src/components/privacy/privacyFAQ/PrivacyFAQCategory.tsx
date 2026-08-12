import PrivacyFAQItem from './PrivacyFAQItem';
import { PrivacyFAQCategoryProps } from '@/types/privacy/privacyPolicy/privacy.faq.category.type';

import '../../../styles/components/privacy/privacyFAQ/PrivacyFAQCategory.scss';

const PrivacyFAQCategory = ({
  label,
  icon: Icon,
  questions,
}: PrivacyFAQCategoryProps) => {
  return (
    <section
      className='privacy-faq-category'
      aria-labelledby={`faq-category-${label}`}
    >
      <header className='privacy-faq-category__header'>
        <div className='privacy-faq-category__header--icon' aria-hidden='true'>
          <Icon size={18} role='img' aria-hidden='true' focusable='false' />
        </div>

        <h3
          id={`faq-category-${label}`}
          className='privacy-faq-category__header--label'
        >
          {label}
        </h3>
      </header>

      <div className='privacy-faq-category__items'>
        {questions.map((question) => (
          <PrivacyFAQItem key={question.id} {...question} />
        ))}
      </div>
    </section>
  );
};

export default PrivacyFAQCategory;
