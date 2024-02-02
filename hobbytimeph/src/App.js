// src/App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <div className="menu">
          <div className="logo">
            <a href="#">Hobby Time</a>
          </div>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="./brands.js">Brands</a></li>
            <li><a href="./about.js">About Us</a></li>
          </ul>
        </div>
      </nav>
      <div className="img"></div>
      <div className="center">
        <div className="title">WELCOME</div>
        <div className="sub_title">CO-HOBBYIST!</div>
        <div className="btns">
          <button>All Products</button>
        </div>
      </div>
    </div>
  );
}

export default App;
