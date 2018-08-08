import React, { Component } from 'react';
import { FiFacebook } from "react-icons/fi";
import MyCarousel from "./carousel";

import logo from './logo.svg';
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
          <a href="#top"><img className="logo" src={logo} alt="logo" /></a>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#crew">Crew</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#press">Press</a></li>
          </ul>
        </header>
        <main>
          <div className="section">
            <MyCarousel />
          </div>
          <div className="section" id="about">
            <h2>About</h2>
            <p>Rat Crew Studios is an indie game studio from Oulu, Finland. We are currently working on an unannounced Action RPG title.</p>
            <img className="logo-large" src={logo} alt="logo" />
          </div>
          <div className="section" id="crew">
            <h2>Crew</h2>
            <div className="members">
              <Member name="Akseli Jylhä-Ollila" role="CEO, Lead Game Designer" />
              <Member name="Lari Kiviranta" role="Technical Director" />
              <Member name="Hannu Suikka" role="Lead Game Developer" />
              <Member name="Tommi Aaltonen" role="Creative Director" />
            </div>
          </div>
          <div className="section" id="contact">
            <h2>Contact</h2>
            <p><a href="mailto:contact@ratcrewstudios.com">contact@ratcrewstudios.com</a></p>
            <p>Kajaaninkatu 27 C 1, 90100 Oulu</p>
          </div>
          <div className="section">
            <div id="map"/>
          </div>
          <footer className="section">
            <a href="https://www.facebook.com/ratcrewstudios/" title="Follow us on Facebook">
              <FiFacebook className="facebook"/>
            </a>
            All Rights Reserved // Copyright {new Date().getFullYear()} &copy;
          </footer>
        </main>
      </div>
    );
  }
}

export default App;
