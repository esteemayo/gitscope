import { LanguagePreviewProps } from '@/types/about/features/previews/language.preview.type';
import '../../../../styles/components/about/features/previews/LanguagePreview.scss';

const LanguagePreview = ({ languages }: LanguagePreviewProps) => {
  return (
    <div className='language-preview'>
      <div className='language-preview__segment-bar'>
        {languages.map((language) => {
          const { id, color, percentage } = language;

          return (
            <span
              key={id}
              className='language-preview__segment'
              style={{ width: `${percentage}%`, backgroundColor: color }}
            />
          );
        })}
      </div>

      <div className='language-preview__list'>
        {languages.map((language) => {
          const { id, name, color, percentage } = language;

          return (
            <div key={id} className='language-preview__item'>
              <span
                className='language-preview__dot'
                style={{ backgroundColor: color }}
              />

              <span className='language-preview__name'>{name}</span>

              <strong className='language-preview__value'>{percentage}</strong>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LanguagePreview;
