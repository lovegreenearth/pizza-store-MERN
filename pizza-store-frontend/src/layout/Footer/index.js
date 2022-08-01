import React, { Component } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import images from '../../constant';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return <div className='footer'>
      <div className='content'>
        <div className='navbar'>
          <div className='logo'>
            <LazyLoadImage
              alt={images.footerLogoImg.alt}
              src={images.footerLogoImg.src}
            />
          </div>
          <div className='footer-container'>
            <div className='footer-link'>
              <div><Link to="/about_us" className='footer-link-title'>ABOUT US</Link></div>
              <div><Link to="/about_us" className='footer-link-text'>Since 1967</Link></div>
              <div><Link to="/about_us" className='footer-link-text'>About Our Food</Link></div>
              <div><Link to="/about_us" className='footer-link-text'>Our Quality</Link></div>
              <div><Link to="/about_us" className='footer-link-text'>Nutrition</Link></div>
              <div><Link to="/about_us" className='footer-link-text'>Menu FAQ</Link></div>            
            </div>
            <div className='footer-link'>
              <div><Link to="/about_us" className='footer-link-title'>FRANCHISING</Link></div>
              <div><Link to="/about_us" className='footer-link-text'>Since 1967</Link></div>
              <div><Link to="/about_us" className='footer-link-text'>About Our Food</Link></div>
              <div><Link to="/about_us" className='footer-link-text'>Our Quality</Link></div>
              <div><Link to="/about_us" className='footer-link-text'>Nutrition</Link></div>
              <div><Link to="/about_us" className='footer-link-text'>Menu FAQ</Link></div>            
            </div>
          </div>
          <div className='footer-container'>
            <div className='footer-link'>
              <div><Link to="/about_us" className='footer-link-title'>COMPANY</Link></div>
              <div><Link to="/about_us" className='footer-link-text'>Since 1967</Link></div>
              <div><Link to="/about_us" className='footer-link-text'>About Our Food</Link></div>
              <div><Link to="/about_us" className='footer-link-text'>Our Quality</Link></div>
              <div><Link to="/about_us" className='footer-link-text'>Nutrition</Link></div>
              <div><Link to="/about_us" className='footer-link-text'>Menu FAQ</Link></div>            
            </div>
            <div className='footer-link'>
              <div><Link to="/about_us" className='footer-link-title'>COMPANY</Link></div>
              <div><Link to="/about_us" className='footer-link-text'>Since 1967</Link></div>
              <div><Link to="/about_us" className='footer-link-text'>About Our Food</Link></div>
              <div><Link to="/about_us" className='footer-link-text'>Our Quality</Link></div>
              <div><Link to="/about_us" className='footer-link-text'>Nutrition</Link></div>
              <div><Link to="/about_us" className='footer-link-text'>Menu FAQ</Link></div>            
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}

export default Footer;