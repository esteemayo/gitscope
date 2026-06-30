import { LanguageItemProps } from '@/types/profile/language/language.item.type';
import '../../../styles/components/profile/languageDistribution/LanguageItem.scss';

const LanguageItem = ({ language }: LanguageItemProps) => {
  return (
    <li className='language-item'>
      <div className='language-item__top'>
        <div className='language-item__info'>
          <span
            className='language-item__dot'
            style={{ backgroundColor: language.color }}
          />

          <span className='language-item__name'>{language.name}</span>
        </div>

        <div className='language-item__meta'>
          <span className='language-item__meta--percentage'>
            {language.percentage.toFixed(1)}%
          </span>

          <small className='language-item__meta--size'>
            {(language.bytes / 1024).toFixed(0)} kb
          </small>
        </div>
      </div>

      <div className='language-item__progress' aria-hidden='true'>
        <div
          className='language-item__fill'
          style={{
            width: `${language.percentage}%`,
            backgroundColor: language.color,
          }}
        />
      </div>
    </li>
  );
};

export default LanguageItem;
