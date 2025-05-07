import React from 'react';
import '../styles/Footer.css';
import facebook from '../assets/icons/facebook.png';
import instagram from '../assets/icons/insta.png';
import playStore from '../assets/icons/play.png';
import appStore from '../assets/icons/appStore.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>De Dana Dan Gaana</h2>
        <p>
          PlayDz is your gateway to the best and latest in music, offering songs across diverse languages including
          Hindi, English, Bollywood, and regional tracks. Stream your favourite songs online or download to enjoy anytime, anywhere!
        </p>
        <hr/>
      </div>

      <div className="footer-links">
        <div>
          <h4>Top Artists</h4>
          <ul>
            <li>Neha Kakkar</li>
            <li>Arijit Singh</li>
            <li>Badshah</li>
            <li>Atif Aslam</li>
            <li>Justin Bieber</li>
            <li>Himesh Reshammiya</li>
            <li>Lata Mangeshkar</li>
            <li>Diljit Dosanjh</li>
          </ul>
        </div>

        <div>
          <h4>Devotional Songs</h4>
          <ul>
            <li>Krishna Bhajan</li>
            <li>Mahamrityunjay Mantra</li>
            <li>Deva Shree Ganesha</li>
            <li>Hanuman Chalisa</li>
            <li>Gaytri Mantra</li>
            <li>Mata Ke Bhajan</li>
            <li>Durga Chalisa</li>
          </ul>
        </div>

        <div>
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Know Your Artist</li>
            <li>Jobs</li>
            <li>Advertise</li>
            <li>Terms and Privacy</li>
            <li>Grievances</li>
          </ul>

          <h4>Help & Support</h4>
          <ul>
            <li>Reach Us</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>

      <hr />

          <div className="footer-bottom">
              <div className="footer-connect">
                  <div className="footer-section">
                      <h4>KEEP IN TOUCH</h4>
                      <div className="footer-icons">
                          <img src={facebook} alt="Facebook" />
                          <img src={instagram} alt="Instagram" />
                      </div>
                  </div>

                  <div className="footer-divider-vertical"></div>

                  <div className="footer-section">
                      <h4>EXPERIENCE APP</h4>
                      <div className="footer-icons">
                          <img src={playStore} alt="Play Store" />
                          <img src={appStore} alt="App Store" />
                      </div>
                  </div>
              </div>
          </div>


      <hr />

      <p className="footer-last">© DZ India Ltd., 2025. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
