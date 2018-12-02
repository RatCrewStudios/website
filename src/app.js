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
    <a target="_blank" href={linkedin}><img className="linkedinLogo" alt="s" src={linkedinLogo} /></a>
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
            <li id="crewLink" ><a title="The Crew" href="#crew-anchor">Crew</a></li>
            {/* <li id="gamesLink" ><a title="Games" href="#games-anchor">Games</a></li> */}
            <li id="contactLink" ><a title="Contact" href="#contact-anchor">Contact</a></li>
            <li id="brokenLink" ><a title="Broken" href="https://broken.ratcrewstudios.com" target="_blank" >Broken</a></li>
            <li id="pressLink" ><a title="Press" href="https://press.ratcrewstudios.com" target="_blank" >Press</a></li>
          </ul>
        </header>
        <main>
          <MyCarousel />
          <div className="section white" id="about">
            <h2>Who Are We?</h2>
            <p>Rat Crew Studios is a game studio from Oulu, Finland.</p>
            <p>The team has dedicated itself to creating fun and ambitious role-playing games with a Finnish attitude and perseverance.</p>
            <p>Currently the studio is working on BROKEN, a Praedor action role-playing game.</p>
            <p>Praedor is a best selling Finnish fantasy franchise created by acclaimed illustrator Petri Hiltunen.</p>
            <a href="https://broken.ratcrewstudios.com" target="_blank">Learn more about BROKEN</a>
          </div>
          <div id="crew-anchor" className="anchor" />
          <div className="section black" id="crew">
            <h2>Crew</h2>
            <div className="members">
              <Member name="Akseli Jylhä-Ollila" position="CEO, Lead Game Designer" linkedin="https://www.linkedin.com/in/akseli-jylh%C3%A4-ollila-3643b4167" image={akseliImg} 
              desc="Jack of all trades, master of none. Akseli’s expertise comes from his knowledge of Media and Design. His love for fantasy literary and games sparked the founding of Rat Crew. When not deeply entrenched in front of the computer, Akseli is somewhere telling stories around the campfire." />
              <Member name="Lari Kivirinta" position="Technical Director" linkedin="https://www.linkedin.com/in/lari-kivirinta" image={lariImg} 
              desc="Lari always had a knack for technology and maths and is tasked with navigating the crew towards new adventures. He spends most of his free time playing video games, most often tactical shooters or action role-playing games. An avid fisherman, Lari is more than happy to return to countryside whenever the opportunity arises." />
              <Member name="Tommi Aaltonen" position="Creative Director" linkedin="https://www.linkedin.com/in/tommi-aaltonen-aa63b1167" image={tommiImg} 
              desc="The self-proclaimed artist of the bunch, Tommi has a mind for languages and visuals. When he’s not making or playing games, you’ll find this sports enthusiast chasing a ball. Tommi is also a master procrastinator and a human encyclopedia of useless entertainment trivia." />
              <Member name="Hannu Suikka" position="Lead Game Developer" linkedin="https://www.linkedin.com/in/hannu-suikka-b61802167" image={hannuImg} 
              desc="Hannu always wanted to create and design games and after studying software development, this crew finally made that dream possible. Passionate game developer during the day and hardcore gamer during the night. Fan of board games and old school pen and paper roleplaying." />
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
            <iframe title="location" className="google-maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1685.3950993308931!2d25.48150981655119!3d65.01227905005403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468032ac0a2ac713%3A0xcfeae1a1bb41c557!2sKajaaninkatu+27%2C+90100+Oulu!5e0!3m2!1sen!2sfi!4v1533737584733" 
            width="300" height="300" frameBorder="0" style={{ border: 0 }} allowFullScreen></iframe>
          </div>
          <footer className="section white">

            <h3>Follow us</h3>
            <aside className="social">
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/ratcrewstudios/" title="Follow us on Facebook">
                <FiFacebook className="icon facebook" />
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
