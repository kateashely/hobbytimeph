// src/App.js
import React from 'react';
import './Bstyle.css';
import green from'./green.png';
import gt from './gt.png';
import hw from './hw.png';
import maj from './maj.png';
import jada from './jada.png';
import mbx from './mbx.png';
import inno from './inno.png';
import mst from './mst.png';
import siku from './siku.png';
import tom from './tom.png';

function Brands() {
  const openFullImg = (src) => {
    // Implement the logic to open the full image based on the source
    console.log('Opening full image:', src);
  };

  return (
    <div className="App">
      <nav>
        <div className="menu">
          <div className="logo">
            <a href="#">Hobby Time</a>
          </div>
          <ul>
            <li><a href="./TitleScreen">Home</a></li>
            <li><a href="#">Brands</a></li>
            <li><a href="./about.js">About Us</a></li>
          </ul>
        </div>
      </nav>

      <br/>
      <br/>
      <br/>
      <br/>
      <div className="full-img" id="fullImgBox">
        <img src="Maisto.png" alt="Full Img" id="fullImg" />
      </div>
     <div className="img-Brands">
        <img src={green} alt="Green Brand" onClick={() => openFullImg('green.png')} />
     </div>
        <div className="img-Brands">
        <img src={gt} alt="GT Brand" onClick={() => openFullImg('gt.png')} />
        </div>
        <div className="img-Brands">
        <img src={hw} alt="HW Brand" onClick={() => openFullImg('hw.png')} />
        </div>
        <div className="img-Brands">
        <img src={maj} alt="Maj Brand" onClick={() => openFullImg('maj.png')} />
        </div>
        <div className="img-Brands">
        <img src={jada} alt="Jada Brand" onClick={() => openFullImg('jada.png')} />
        </div>
        <div className="img-Brands">
        <img src={mbx} alt="MBX Brand" onClick={() => openFullImg('mbx.png')} />
        </div>
        <div className="img-Brands">
        <img src={inno} alt="Inno Brand" onClick={() => openFullImg('inno.png')} />
        </div>
        <div className="img-Brands">
        <img src={mst} alt="MST Brand" onClick={() => openFullImg('mst.png')} />
        </div>
        <div className="img-Brands">
        <img src={siku} alt="Siku Brand" onClick={() => openFullImg('siku.png')} />
        </div>
        <div className="img-Brands">
        <img src={tom} alt="Tom Brand" onClick={() => openFullImg('tom.png')} />
        </div>
    </div>
  

  );

}
export default Brands;
