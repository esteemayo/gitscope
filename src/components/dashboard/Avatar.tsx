import Image from 'next/image';
import '../../styles/components/Avatar.scss';

const Avatar = () => {
  return (
    <div className='avatar'>
      <Image
        src='/avatar-2.jpg'
        width={130}
        height={130}
        alt='avatar'
        loading='eager'
      />
    </div>
  );
};

export default Avatar;
