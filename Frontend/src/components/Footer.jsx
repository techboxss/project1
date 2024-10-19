import React from 'react';
import './Footer.css'; 
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section contact-us">
          <h3>Contact Us</h3>
          <p>Hi, we are always open for cooperation and suggestions, contact us in one of the ways below:</p>
          <p><strong>Phone Number</strong><br />089252 97807</p>
          <p><strong>Email Address</strong><br /><a href="mailto:careers@uitouxsolutions.com">careers@uitouxsolutions.com</a></p>
          <p><strong>Our Location</strong><br />102, Athipalayam Rd, Ramakrishnapuram, Chinnavedampatti, Coimbatore, Tamil Nadu 641049</p>
          <p><strong>Working Hours</strong><br />Mon-Fri 10:00pm - 6:00pm</p>
        </div>

        <div className="footer-section">
          <h3>Information</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Delivery Information</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Brands</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Site Map</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>My Account</h3>
          <ul>
            <li><a href="#">Store Location</a></li>
            <li><a href="#">Order History</a></li>
            <li><a href="#">Wish List</a></li>
            <li><a href="#">Newsletter</a></li>
            <li><a href="#">Special Offers</a></li>
            <li><a href="#">Gift Certificates</a></li>
            <li><a href="#">Affiliate</a></li>
          </ul>
        </div>

        <div className="footer-section newsletter">
          <h3>Newsletter</h3>
          <p>Enter your email address below to subscribe to our newsletter and keep up to date with discounts and special offers.</p>
          <form>
            <input type="email" placeholder="user@example.com" />
            <button type="submit">Subscribe</button>
          </form>
          <div className="social-icons">
            
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-rss"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Powered by <strong>React / Next.js</strong> — Designed by <strong>UITOUX Solutions</strong></p>
        <div className="payment-icons">
       
          
        <img src="/payments.png" alt="Payment Methods" />
    
        </div>
      </div>
    </footer>
  );
};

export default Footer;
