import { ProfileMetaCardProps } from '@/types/profile/profile.meta.card.type';
import '../../styles/components/profile/ProfileMetaCard.scss';

const ProfileMetaCard = ({
  icon: Icon,
  label,
  value,
}: ProfileMetaCardProps) => {
  return (
    <article className='profile-meta-card' aria-label={`${label}: ${value}`}>
      <div className='profile-meta-card__icon'>
        <Icon />
      </div>

      <div className='profile-meta-card__content'>
        <span className='profile-meta-card__content--label'>{label}</span>

        <strong className='profile-meta-card__content--value'>{value}</strong>
      </div>
    </article>
  );
};

export default ProfileMetaCard;
