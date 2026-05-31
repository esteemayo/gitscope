import { SectionHeaderProps } from '@/types/section.header.type';
import '../../styles/components/SectionHeader.scss';

const SectionHeader = ({ title, description }: SectionHeaderProps) => {
  return (
    <header className='section-header'>
      <h3 className='section-header--title'>{title}</h3>

      <p className='section-header--description'>{description}</p>
    </header>
  );
};

export default SectionHeader;
