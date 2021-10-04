import {} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';


const Footer = () => {
  // this is footer section
  return (
    <div>
      <footer className="footer-container mt-5">
        <div className="d-flex flex-wrap mt-4 align-content-around mb-4 justify-content-around">
          <div>
            <h3 className="text-white">PHONE SUPPORT</h3>
            <p className="text-info">24 HOURS A DAY</p>
            <h3 className="text-info">+880 783 749</h3>
          </div>
          <div>
            <h3 className="text-white">CONNECT WITH US</h3>
            <p className="text-white">SOCIAL MEDIA CHANNEL</p>
            <p>
              <span className="text-white m-2">
                <i className="fab fa-twitter me-2"></i>
                <i className="fab fa-instagram me-2"></i>
                <i className="fab fa-facebook-f me-2"></i>
                <i className="fab fa-facebook-messenger me-2"></i>
                <i className="fab fa-whatsapp me-2"></i>
              </span>
            </p>
          </div>
          <div>
            <h3 className="text-white">NEWSLETTER</h3>
            <p className="text-white">SIGN UP FOR SPECIAL OFFERS</p>
            <p>
              <input className="footer-input" type="text" placeholder="Email" />
              <button className="footer-btn">SUBSCRIBE</button>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
