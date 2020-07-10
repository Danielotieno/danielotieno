import React from 'react';
import SocialLinks from '../constants/socialLinks';
const Footer = () => {
  return (
    <footer className='footer'>
      <div>
        <SocialLinks styleClass='footer-links' />
        <h4>copyright&copy;{new Date().getFullYear()}</h4>
        <span className='daniel'>Daniel Otieno &#10084;&#65039;</span>
      </div>
    </footer>
  );
};

export default Footer;
