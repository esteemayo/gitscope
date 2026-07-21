import { AboutSectionHeaderProps } from '@/types/about/about.section.header.type';
import '../../styles/components/about/AboutSectionHeader.scss';

const AboutSectionHeader = ({
  id,
  badge,
  title,
  description,
}: AboutSectionHeaderProps) => {
  return (
    <header className='about-section-header'>
      <span className='about-section-header__badge'>{badge}</span>

      <h2 id={id} className='about-section-header__title'>
        {title}
      </h2>

      <p className='about-section-header__description'>{description}</p>
    </header>
  );
};

export default AboutSectionHeader;
