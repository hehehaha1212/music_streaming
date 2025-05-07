import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DeveloperCard from '../components/DeveloperCard';
import Aditi from '../assets/developers/aditi.png';
import Aditya from '../assets/developers/aditya.png';
import Anjali from '../assets/developers/anjali.png';
import Krishna from '../assets/developers/bansal.png';
import '../styles/AboutUs.css';

const About = () => {
  return (
    <>
      <Header />
      <div className="about-page">
        <div className="about-section">
          <div className="about-text">
            <h1>About Dz Player</h1>
            <p>We’re PlayDz — Your New Musical Obsession.</p>
            <p>Tired of listening to the same 3 songs on repeat like a broken record? So were we. That’s why we created PlayDz — a place where music actually slaps, and so does our playlist game.</p>
            <p>You can also browse through the collections of friends, artists, and celebrities, or create a radio station and just sit back.</p>
            <p>Our Mission (besides world domination) is to help you discover bangers before your friends do, stream music smoother than your WiFi, and obviously to find your vibe. </p>
          </div>

          <div className="about-contact">
            <h2>PlayDz HQ</h2>
            <p><strong>PlayDz CDC</strong></p>
            <p>Team Aditi,</p>
            <p>MMMUT, Gorakhpur</p>
            <p>India</p>
            <p>Reg no: 123456-7890</p>
            <p>office@playDz.com</p>
          </div>
        </div>

        <div className="support-section">
          <h1>Customer Service and Support</h1>
          <ul>
            <li><strong>Help site.</strong> Check out our help site for answers to your questions and to learn how to get the most out of Spotify and your music.</li>
            <li><strong>Community.</strong> Get fast support from expert Spotify users. If there isn’t already an answer there to your question, post it and someone will quickly answer. You can also suggest and vote on new ideas for Spotify or simply discuss music with other fans.</li>
            <li><strong>Contact us.</strong> Contact our Customer Support if you don’t find a solution on our support site or Community.</li>
          </ul>
        </div>

        <div className="developers-section">
          <h2>About Developers</h2>
          <div className="dev-row">
            <DeveloperCard name="Aditi Rai" role="Developer" image={Aditi}/>
            <DeveloperCard name="Krishna Bansal" role="Developer" image={Krishna}/>
            <DeveloperCard name="Anjali Chaudhary" role="Developer" image={Anjali}/>
            <DeveloperCard name="Aditya Singh Kshatri" role="Developer" image={Aditya}/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
