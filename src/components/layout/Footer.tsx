import Link from 'next/link';
import '../../styles/components/Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <p className='footer__copyright'>
          &copy; {new Date().getFullYear()} GitScope, Inc. All rights reserved.
        </p>

        <ul className='footer__list'>
          <li className='footer__item'>
            <a
              href='https://github.com'
              className='footer__item--link'
              target='_blank'
              rel='noopener noreferrer'
            >
              GitHub
            </a>
          </li>

          <li className='footer__item'>
            <Link href='/compare' className='footer__item--link'>
              Compare
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
