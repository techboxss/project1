import React from "react";
import './HeroSection.css'; 
import slide1 from "../../public/images/slide-1.jpeg";

const HeroSection = () => {
  return (
    <section className="hero-section" style={{ backgroundImage: `url(${slide1})` }}>
      <div className="hero-content">
        <h2><span>30% OFF</span> When Buying Parts With Installation</h2>
        <p>Installation of parts in the services of our partners.</p>
        <a href="#shop-now" className="hero-btn">Shop Now</a>
      </div>
    </section>
  );
};

export default HeroSection;
