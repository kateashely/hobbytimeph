import React from "react";
import { Link } from "react-router-dom";

function TitleScreen() {
  return (
    <div className="App">
      <nav>
        <div className="menu">
          <div className="logo">
            <Link to="/">Hobby Time</Link> 
          </div>
          <ul>
            <li><Link to="/">Home</Link></li> 
            <li><Link to="/brands">Brands</Link></li> 
            <li><Link to="About">About Us</Link></li> 
          </ul>
        </div>
      </nav>
      <div className="img"></div>
      <div className="center">
        <div className="title">WELCOME</div>
        <div className="sub_title">CO-HOBBYIST!</div>
        <div className="btns">
          <button><Link to="/products">All Products</Link></button>
        </div>
      </div>
    </div>
  );
}

export default TitleScreen;
