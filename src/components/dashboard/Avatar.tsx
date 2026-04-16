import Image from 'next/image';
import '../../styles/components/Avatar.scss';

const Avatar = () => {
  return (
    <div className='avatar'>
      <Image src='/hero.png' width={130} height={130} alt='avatar' />
    </div>
  );
};

export default Avatar;
