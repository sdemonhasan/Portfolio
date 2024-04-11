import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar';
import Logo from '../../assets/logo.svg';

import './Header.css';

function Header() {
  const { homepage, title } = header;

  return (
    <header className='header center'>
      <h3>
        {homepage ? (
          <a href={homepage} className='link'>
            <img className='link brand__link' src={Logo} alt="brand logo" />
          </a>
        ) : (
          title
        )}
      </h3>
      <Navbar />
    </header>
  );
}

export default Header
