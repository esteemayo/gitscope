import Link from 'next/link';
import '../../styles/components/Logo.scss';

const Logo = () => {
  return (
    <h2 className='logo'>
      <Link href='/' className='logo__link'>
        <span className='logo__link--primary'>Git</span>
        <span className='logo__link--secondary'>Scope</span>
      </Link>
    </h2>
  );
};

export default Logo;
