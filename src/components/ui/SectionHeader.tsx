import { SectionHeaderProps } from '@/types/section.header.type';
import '../../styles/components/SectionHeader.scss';

const SectionHeader = ({
  icon,
  size = 'sm',
  title,
  description,
}: SectionHeaderProps) => {
  return (
    <header className={`section-header ${size}`}>
      {icon && <div className='section-header__icon'>{icon}</div>}

      <div className='section-header__content'>
        <h3 className={`section-header__content--title ${size}`}>{title}</h3>

        <p className='section-header__content--description'>{description}</p>
      </div>
    </header>
  );
};

export default SectionHeader;
