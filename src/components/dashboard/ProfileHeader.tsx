import Image from 'next/image';

import MapPin from '../icons/MapPin';
import Calendar from '../icons/Calendar';

import '../../styles/components/ProfileHeader.scss';

const ProfileHeader = () => {
  return (
    <section className='profile-header'>
      <div className='profile-header__container'>
        <div className='profile-header__avatar'>
          <Image src='/hero.png' width={130} height={130} alt='avatar' />
        </div>

        <h1 className='profile-header__name'>Emmanuel Adebayo</h1>

        <h2 className='profile-header__username'>
          <a
            href='https://github.com/esteemayo'
            target='_blank'
            rel='noopener noreferrer'
          >
            @esteemayo
          </a>
        </h2>

        <p className='profile-header__bio'>
          Full Stack Web Developer → MERN | MEVN | GraphQL | NextJS | React Native | TypeScript
        </p>

        <div className='profile-header__info'>
          <span className='profile-header__info--item'>
            <MapPin />
            Lagos, Nigeria
          </span>

          <span className='profile-header__info--item'>
            <Calendar />
            Joined July 25, 2019
          </span>
        </div>

        <div className='profile-header__stats'>
          <div className='profile-header__item'>
            <span className='profile-header__item--num'>200</span>
            <span className='profile-header__item--num-label'>Repositories</span>
          </div>

          <div className='profile-header__item'>
            <span className='profile-header__item--num'>14</span>
            <span className='profile-header__item--num-label'>Followers</span>
          </div>

          <div className='profile-header__item'>
            <span className='profile-header__item--num'>45</span>
            <span className='profile-header__item--num-label'>Following</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileHeader;
