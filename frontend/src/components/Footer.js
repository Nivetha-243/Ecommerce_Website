import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className='footerpage'>
        <div className='footershop'>
            <p><b>shop</b>cart</p>
        </div>
        <div className='footercontent'>
          <p className='aboutus'>About us</p>
          <p className='contact'>Contact</p>
          <p className='help'>Help</p>
        </div>
        <div className='language'>
          <p>Language</p>
        </div>
      
    </div>
  )
}

export default Footer;
