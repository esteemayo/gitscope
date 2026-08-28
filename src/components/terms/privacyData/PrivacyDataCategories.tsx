'use client';

import PrivacyDataCategory from './PrivacyDataCategory';
import { PrivacyDataCategoriesProps } from '@/types/terms/privacyData/privacy.data.categories.type';

import '../../../styles/components/terms/privacyData/PrivacyDataCategories.scss';

const PrivacyDataCategories = ({ categories }: PrivacyDataCategoriesProps) => {
  return (
    <section
      className='privacy-data-categories'
      aria-labelledby='privacy-data-categories-title'
    >
      <div className='privacy-data-categories__heading'>
        <span className='privacy-data-categories__heading--label'>
          Information boundaries
        </span>

        <h3
          id='privacy-data-categories-title'
          className='privacy-data-categories__heading--title'
        >
          Typical data categories
        </h3>
      </div>

      <div className='privacy-data-categories__rail'>
        {categories.map((category, index) => (
          <PrivacyDataCategory key={category.id} {...category} index={index} />
        ))}
      </div>
    </section>
  );
};

export default PrivacyDataCategories;
