import {} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <div>
      <footer className="footer-container mt-5">
        <div className="d-flex justify-content-around align-items-center">
          <div>
            <h3 className="text-white">PHONE SUPPORT</h3>
            <p className="text-info">24 HOURS A DAY</p>
            <h3 className="text-white">+01 3456 47745</h3>
          </div>
          <div>
            <h3 className="text-white">CONNECT WITH US</h3>
            <p className="text-white">SOCIAL MEDIA CHANNEL</p>
            <p>
              <span>
                <i class="fab fa-twitter"></i>
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
