import React, { Component } from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import MyCarousel from './carousel';
import logo from './logo.svg';
import './app.css';
import linkedinLogo from './In-2CRev-21px-R.png';
import lariImg from './lari.png';
import akseliImg from './akseli.png';
import tommiImg from './tommi.png';
import hannuImg from './hannu.png';

const Member = ({ name, position, linkedin, image, desc }) => (
  <div className="member">
    <img className="memberImg" alt={name} src={image} />
    <p className="name">{name}</p>
    <p className="role">{position}</p>
    <p className="desc">{desc}</p>
    <a target="_blank" rel="noopener noreferrer" href={linkedin}><img className="linkedinLogo" alt="s" src={linkedinLogo} /></a>
  </div>
)

class App extends Component {
  render() {
    return (
      <div id="top" className="app">
        <header>
          <img className="logo" alt="Top" src={logo} />
          <ul>
            <li id="pageLink" className="hide-mobile" ><a title="Top of page" href="#top"><span className="hide-mobile">Rat Crew Studios</span></a></li>
            <li id="crewLink" ><a title="Crew" href="#crew-anchor">Crew</a></li>
            {/* <li id="gamesLink" ><a title="Games" href="#games-anchor">Games</a></li> */}
            <li id="contactLink" ><a title="Contact" href="#contact-anchor">Contact</a></li>
            <li id="pressLink" ><a title="Press" href="https://press.ratcrewstudios.com" target="_blank" rel="noopener noreferrer" >Press</a></li>
          </ul>
        </header>
        <main>
          <MyCarousel />
          <div className="section white" id="about">
            <h2>Who Are We?</h2>
            <p>Rat Crew Studios is a game studio from Oulu, Finland. We have dedicated ourselves to creating fun and ambitious role-playing games with a Finnish attitude and perseverance.</p>
            <p>We are currently working on an unannounced Action RPG title. To be announced soon!</p>
          </div>
          <div id="crew-anchor" className="anchor" />
          <div className="section black" id="crew">
            <h2>Crew</h2>
            <div className="members">
              <Member name="Akseli Jylhä-Ollila" position="CEO, Lead Game Designer" linkedin="https://www.linkedin.com/in/akseli-jylh%C3%A4-ollila-3643b4167" image={akseliImg} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus rhoncus malesuada. Ut felis dolor, pharetra vitae ipsum sit amet, gravida sodales orci. Suspendisse laoreet eu metus a faucibus. Donec dictum ut dui nec elementum. Aliquam volutpat enim id purus gravida malesuada. Aenean non condimentum lectus. Duis ultricies semper blandit." />
              <Member name="Lari Kivirinta" position="Technical Director" linkedin="https://www.linkedin.com/in/lari-kivirinta" image={lariImg} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus rhoncus malesuada. Ut felis dolor, pharetra vitae ipsum sit amet, gravida sodales orci. Suspendisse laoreet eu metus a faucibus. Donec dictum ut dui nec elementum. Aliquam volutpat enim id purus gravida malesuada. Aenean non condimentum lectus. Duis ultricies semper blandit." />
              <Member name="Tommi Aaltonen" position="Creative Director" linkedin="https://www.linkedin.com/in/tommi-aaltonen-aa63b1167" image={tommiImg} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus rhoncus malesuada. Ut felis dolor, pharetra vitae ipsum sit amet, gravida sodales orci. Suspendisse laoreet eu metus a faucibus. Donec dictum ut dui nec elementum. Aliquam volutpat enim id purus gravida malesuada. Aenean non condimentum lectus. Duis ultricies semper blandit." />
              <Member name="Hannu Suikka" position="Lead Game Developer" linkedin="https://www.linkedin.com/in/hannu-suikka-b61802167" image={hannuImg} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus rhoncus malesuada. Ut felis dolor, pharetra vitae ipsum sit amet, gravida sodales orci. Suspendisse laoreet eu metus a faucibus. Donec dictum ut dui nec elementum. Aliquam volutpat enim id purus gravida malesuada. Aenean non condimentum lectus. Duis ultricies semper blandit." />
            </div>
          </div>

          {/* <div id="press-anchor" className="anchor" />
          <div className="section white" id="press">
            <h2>Press</h2>
            <p><a download href={logo}><FiDownloadCloud /> Download official Rat Crew Studios logo</a></p>
          </div> */}

          {/* <div id="games-anchor" className="anchor" />
          <div className="section white" id="games">
            <h2>Games</h2>
            <p><a title="Broken" href="https://broken.ratcrewstudios.com" target="_blank" rel="noopener noreferrer" >Broken</a></p>
          </div> */}

          <div id="contact-anchor" className="anchor" />
          <div className="section black" id="contact">
            <h2>Contact</h2>
            <p><a href="mailto:contact@ratcrewstudios.com">contact@ratcrewstudios.com</a></p>
            <p>Kajaaninkatu 27 C 1, 90100 Oulu</p>
            <iframe title="location" className="google-maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1685.3950993308931!2d25.48150981655119!3d65.01227905005403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468032ac0a2ac713%3A0xcfeae1a1bb41c557!2sKajaaninkatu+27%2C+90100+Oulu!5e0!3m2!1sen!2sfi!4v1533737584733" width="300" height="300" frameBorder="0" style={{ border: 0 }} allowFullScreen></iframe>

          </div>
          <footer className="section white">

            <h3>Follow us</h3>
            <aside className="social">
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/ratcrewstudios/" title="Follow us on Facebook">
                <FiFacebook className="icon facebook" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/ratcrewstudios" title="Follow us on Twitter">
                <FiTwitter className="icon twitter" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/ratcrewstudiosltd/" title="Follow us on Instagram">
                <FiInstagram className="icon instagram" />
              </a>
            </aside>
            <br />
            <p>© {new Date().getFullYear()} Rat Crew Studios Ltd.</p>
          </footer>
        </main>
      </div>
    );
  }
}
export default App;
