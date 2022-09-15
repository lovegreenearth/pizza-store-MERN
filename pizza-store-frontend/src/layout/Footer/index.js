import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FooterLogo from "../../assets/img/footer-logo.png"
class Footer extends Component {
  render() {
    return <div className='footer'>
      <div className='content'>
        <div className='navbar'>
          <div className='logo'>
            <img src={FooterLogo} alt="footer-logo" />
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