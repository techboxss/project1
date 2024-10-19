import React from 'react';
import './pages.css';
import motorOilImage from './../../public/images/banner1.jpeg'; 
import interiorImage from './../../public/images/banner2.jpeg'; 

const Pages= () => {
  return (
    <div className="product-section">
      <div className="product-item motor-oil-container" style={{ backgroundImage: `url(${motorOilImage})` }}>
        <div className="text-content">
          <h2 className="title-yellow">MOTOR OILS</h2>
          <p>Synthetic motor oil with free shipping<br />Friction free life guaranteed</p>
          <button className="shop-button">Shop Now</button>
        </div>
      </div>

      <div className="product-item interior-container" style={{ backgroundImage: `url(${interiorImage})` }}>
        <div className="text-content">
          <h2 className="title-yellow">SAVE UP TO $40</h2>
          <p>Luxurious interior part for real aesthetics<br />Leather, fabric, ivory and more.</p>
          <button className="shop-button">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Pages;
