import React from 'react';
import './Astyle.css';
import Ab1 from './Ab1.png';


function About() {
  return (
    <div>
      <nav>
        <div className="menu">
          <div className="logo">
            <a href="#">Hobby Time</a>
          </div>
          <ul>
            <li><a href="./TitleScreen.js">Home</a></li>
            <li><a href="./brands.js">Brands</a></li>
            <li href="#">About Us</li>
          </ul>
        </div>
      </nav>
      <div className="about-section">
        <h3 className="subs">About Us</h3>
        <p className="parag">Hobby Time is an online toy store created for people who enjoy collecting fantastic toys, particularly diecast cars. We offer products of excellent quality that are worth their price from well-known brands all around the world. If you're a newbie, an amateur, planning to become one, or simply inquisitive, this is the place to be.</p>
      </div>
      <h3 className="subs" style={{ textAlign: 'center' }}>Our Team</h3>
      <div className="row">
        {/* Card for each team member */}
        <div className="column">
          <div className="card">
            <img src={Ab1} alt="Jane" style={{ width: '100%' }} />
            <div className="container">
              <h4 className="nim">Perdon, Shanna Mae A.</h4>
              <p className="titles">Lyceum of Alabang Student</p>
              <p className="Quo">If you can't explain it simply, you don't understand it well enough. Albert Einstein</p>
              <p className="gms">perdonshanna@Gmail.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
        {/* Repeat the above structure for other team members */}
      </div>
    </div>
  );
}

export default About;
