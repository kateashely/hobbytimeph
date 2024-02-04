import React, { useState } from 'react';
import './pstyle.css'; // Import your CSS file
import image1 from'./image1.png';
import image2 from './image2.png';
import image3 from './image3.png';
import image4 from './image4.png';
import image5 from './image5.png';
import image6 from './image6.png';
import image7 from './image7.png';
import image8 from './image8.png';
import image9 from './image9.png';
import image10 from './image10.png';

function Products() {
  const [fullImgSrc, setFullImgSrc] = useState(null);

  function openFullImg(pic) {
    setFullImgSrc(pic);
  }

  function closeFullImg() {
    setFullImgSrc(null);
  }

  return (
    <div>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>All Product</title>
        <link rel="stylesheet" href="./pstyle.css" />
        <div className="center">
          <nav>
            <ul>
              <li><a href="#">All PRODUCTS</a></li>
            </ul>
          </nav>
          <br />
        </div>
      </head>
      <body>
        <div className="full-img" id="fullImgBox" style={{ display: fullImgSrc ? 'flex' : 'none' }}>
          <img src={fullImgSrc} id="fullImg" />
          <span onClick={closeFullImg}>X</span>
        </div>
        <div className="img-gallery">
          <img src={image1} onClick={() => openFullImg("./image1.png")} />
          <img src={image2} onClick={() => openFullImg("./image2.png")} />
          <img src={image3} onClick={() => openFullImg("./image3.png")} />
          <img src={image4} onClick={() => openFullImg("./image4.png")} />
          <img src={image5} onClick={() => openFullImg("./image5.png")} />
          <img src={image6} onClick={() => openFullImg("./image6.png")} />
          <img src={image7} onClick={() => openFullImg("./image7.png")} />
          <img src={image8} onClick={() => openFullImg("./image8.png")} />
          <img src={image9} onClick={() => openFullImg("./image9.png")} />
          <img src={image10} onClick={() => openFullImg("./image10.png")} />
        </div>
      </body>
    </div>
  );
}

export default Products;
