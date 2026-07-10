import '../../../styles/components/about/features/FeatureHeader.scss';

interface FeatureHeaderProps {
  badge: string;
  title: string;
  description: string;
}

const FeatureHeader = ({ badge, title, description }: FeatureHeaderProps) => {
  return (
    <header className='feature-header'>
      <span className='feature-header__badge'>{badge}</span>

      <h2 id='about-features-title' className='feature-header__title'>
        {title}
      </h2>

      <p className='feature-header__description'>{description}</p>
    </header>
  );
};

export default FeatureHeader;
