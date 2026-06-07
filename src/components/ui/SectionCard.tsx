import '../../styles/components/SectionCard.scss';

interface SectionCardProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}

const SectionCard = ({
  title,
  description,
  action,
  children,
}: SectionCardProps) => {
  return (
    <section className='section-card'>
      <header className='section-card__header'>
        <div className='section-card__container'>
          <h2 className='section-card__title'>{title}</h2>

          <p className='section-card__description'>{description}</p>
        </div>

        <div className='section-card__action'>{action}</div>
      </header>

      <div className='section-card__content'>{children}</div>
    </section>
  );
};

export default SectionCard;
