import { ProfileHeadingProps } from '@/types/profile/profile.heading.type';
import '../../styles/components/profile/ProfileHeading.scss';

const ProfileHeading = ({ id, title, description }: ProfileHeadingProps) => {
  return (
    <div className='profile-heading'>
      <h2 id={id} className='profile-heading__title'>
        {title}
      </h2>

      <p className='profile-heading__description'>{description}</p>
    </div>
  );
};

export default ProfileHeading;
