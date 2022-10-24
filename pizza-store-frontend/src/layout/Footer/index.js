import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FooterLogo from "../../assets/img/footer-logo.png"
class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='footer-content'>
          <div className='footer-logo'><img src={FooterLogo} alt="Footer Logo" /></div>
          <div className='individual-detail'>
            <div><Link className='detail-title' to="/">About Us</Link></div>
            <div><Link className='detail' to="/">Since 1697</Link></div>
            <div><Link className='detail' to="/">About Our Food</Link></div>
            <div><Link className='detail' to="/">Our Quality</Link></div>
            <div><Link className='detail' to="/">Nutrition</Link></div>
            <div><Link className='detail' to="/">Menu FAQ</Link></div>
          </div>
          <div className='individual-detail'>
            <div><Link className='detail-title' to="/about_us">Franchising</Link></div>
            <div><Link className='detail' to="/about_us">Since 1697</Link></div>
            <div><Link className='detail' to="/about_us">About Our Food</Link></div>
            <div><Link className='detail' to="/about_us">Our Quality</Link></div>
            <div><Link className='detail' to="/about_us">Nutrition</Link></div>
            <div><Link className='detail' to="/about_us">Menu FAQ</Link></div>
          </div>
          <div className='individual-detail'>
            <div><Link className='detail-title' to="/about_us">Company</Link></div>
            <div><Link className='detail' to="/about_us">Since 1697</Link></div>
            <div><Link className='detail' to="/about_us">About Our Food</Link></div>
            <div><Link className='detail' to="/about_us">Our Quality</Link></div>
            <div><Link className='detail' to="/about_us">Nutrition</Link></div>
            <div><Link className='detail' to="/about_us">Menu FAQ</Link></div>
          </div>
          <div className='individual-detail'>
            <div><Link className='detail-title' to="/about_us">Company</Link></div>
            <div><Link className='detail' to="/about_us">Since 1697</Link></div>
            <div><Link className='detail' to="/about_us">About Our Food</Link></div>
            <div><Link className='detail' to="/about_us">Our Quality</Link></div>
            <div><Link className='detail' to="/about_us">Nutrition</Link></div>
            <div><Link className='detail' to="/about_us">Menu FAQ</Link></div>
          </div>
          
        </div>

      </div>
    )
  }

}

export default Footer;