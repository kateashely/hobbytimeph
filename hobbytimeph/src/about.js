// src/App.js
import React from 'react';
import './App.css';

function About() {
  return (
    <div className="App">
      <nav>
        <div className="menu">
          <div className="logo">
            <a href="#">Hobby Time</a>
          </div>
          <ul>
            <li><a href="./index.css">Home</a></li>
            <li><a href="./brands.js">Brands</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default About;
