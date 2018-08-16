import React, { Component } from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiDownloadCloud } from 'react-icons/fi';
import MyCarousel from './carousel';
import logo from './logo.svg';
import logoOutline from './logo-outline.svg';
import './app.css';


const Member = ({name, role}) => (
  <div className="member">
    <p className="name">{name}</p>
    <p className="role">{role}</p>
  </div>
)

class App extends Component {
  render() {
    return (
      <div id="top" className="app">
        <header>
          <ul>
            <li><a href="#top"><img className="logo" src={logoOutline} />Rat Crew Studios</a></li>
            <li><a href="#crew-anchor">Crew</a></li>
            <li><a href="#press-anchor">Press</a></li>
            <li><a href="#contact-anchor">Contact</a></li>
          </ul>
        </header>
        <MyCarousel />
        <main>
          <div className="section white" id="about">
            <img className="logo-large" src={logo} alt="logo" />
            <p>Rat Crew Studios is an indie game studio from Oulu, Finland. We are currently working on an unannounced Action RPG title.</p>
            <p>Come to meet us at <a href="http://www.gamescom.global/" alt="gamescom">gamescom</a>!</p>
          </div>
          <div id="crew-anchor" className="anchor" />
          <div className="section black" id="crew">
            <h2>Crew</h2>
            <div className="members">
              <Member name="Akseli Jylhä-Ollila" role="CEO, Lead Game Designer" />
              <Member name="Lari Kiviranta" role="Technical Director" />
              <Member name="Hannu Suikka" role="Lead Game Developer" />
              <Member name="Tommi Aaltonen" role="Creative Director" />
            </div>
          </div>
          <div id="press-anchor" className="anchor" />
          <div className="section white" id="press">
            <h2>Press</h2>
            <p><a download href={logo}><FiDownloadCloud/> Download official Rat Crew Studios logo</a></p>
          </div>
          <div id="contact-anchor" className="anchor" />
          <div className="section black" id="contact">
            <h2>Contact</h2>
            <p><a href="mailto:contact@ratcrewstudios.com">contact@ratcrewstudios.com</a></p>
            <p>Kajaaninkatu 27 C 1, 90100 Oulu</p>
            <iframe className="google-maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1685.3950993308931!2d25.48150981655119!3d65.01227905005403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468032ac0a2ac713%3A0xcfeae1a1bb41c557!2sKajaaninkatu+27%2C+90100+Oulu!5e0!3m2!1sen!2sfi!4v1533737584733" width="300" height="300" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
          </div>
          <footer className="section white">
            <aside className="social">
              <a href="https://www.facebook.com/ratcrewstudios/" title="Follow us on Facebook">
                <FiFacebook className="icon facebook"/>
              </a>
              <a href="https://twitter.com/ratcrewstudios" title="Follow us on Twitter">
                <FiTwitter className="icon twitter"/>
              </a>
              <a href="https://www.instagram.com/ratcrewstudios1/" title="Follow us on Instagram">
                <FiInstagram className="icon instagram"/>
              </a>
            </aside>
            <p>All Rights Reserved // Copyright {new Date().getFullYear()} &copy;</p>
          </footer>
        </main>
      </div>
    );
  }
}

export default App;
