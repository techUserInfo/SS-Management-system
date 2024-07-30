import React from 'react'
import { Link } from 'react-router-dom';
import '../../../assets/Dashboard.css';

const Footer = () => {
  return (
    <div>
      <nav className='footer_bg'>
        <div className='Container'>
        <footer>
      <Link className='footer-logo' to='/new-footer-text'>
        New Footer Text
      </Link>
    </footer>
    </div>
    </nav>
    </div>
  );
}

export default Footer;
