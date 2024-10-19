import React, { useState } from "react";
import './About.css';

const About = () => {
  const [dropdown, setDropdown] = useState(null);

  
  const handleMouseEnter = (menu) => {
    setDropdown(menu);
  };

  const handleMouseLeave = () => {
    setDropdown(null);
  };

  return (
    <header className="header">
      <div className="header-left">
        <nav className="nav-links">
          <ul>
          
            <li className="category-menu" onMouseEnter={() => handleMouseEnter('category')} onMouseLeave={handleMouseLeave}>
  <button className="menu-btn">
    <i className="fas fa-bars"></i> 
    <span className="menu-text">Shop By Category <span className="dropdown-icon">▾</span></span>
  </button>
  {dropdown === 'category' && (
    <div className="dropdown">
      <a href="#category-1">Category 1</a>
      <a href="#category-2">Category 2</a>
      <a href="#category-3">Category 3</a>
    </div>
  )}
</li>


           
            <li onMouseEnter={() => handleMouseEnter('home')} onMouseLeave={handleMouseLeave}>
              <a href="#home">Home <span className="dropdown-icon">▾</span></a>
              {dropdown === 'home' && (
                <div className="dropdown">
                  <a href="#home-1">Home 1</a>
                  <a href="#home-2">Home 2</a>
                  <a href="#home-3">Home 3</a>
                </div>
              )}
            </li>
            <li onMouseEnter={() => handleMouseEnter('megamenu')} onMouseLeave={handleMouseLeave}>
              <a href="#megamenu">Megamenu <span className="dropdown-icon">▾</span></a>
              {dropdown === 'megamenu' && (
                <div className="dropdown">
                  <a href="#menu-1">Menu 1</a>
                  <a href="#menu-2">Menu 2</a>
                  <a href="#menu-3">Menu 3</a>
                </div>
              )}
            </li>
            <li onMouseEnter={() => handleMouseEnter('shop')} onMouseLeave={handleMouseLeave}>
              <a href="#shop">Shop <span className="dropdown-icon">▾</span></a>
              {dropdown === 'shop' && (
                <div className="dropdown">
                  <a href="#shop-1">Shop 1</a>
                  <a href="#shop-2">Shop 2</a>
                  <a href="#shop-3">Shop 3</a>
                </div>
              )}
            </li>
            <li onMouseEnter={() => handleMouseEnter('blog')} onMouseLeave={handleMouseLeave}>
              <a href="#blog">Blog <span className="dropdown-icon">▾</span></a>
              {dropdown === 'blog' && (
                <div className="dropdown">
                  <a href="#blog-1">Blog 1</a>
                  <a href="#blog-2">Blog 2</a>
                  <a href="#blog-3">Blog 3</a>
                </div>
              )}
            </li>
            <li onMouseEnter={() => handleMouseEnter('account')} onMouseLeave={handleMouseLeave}>
              <a href="#account">Account <span className="dropdown-icon">▾</span></a>
              {dropdown === 'account' && (
                <div className="dropdown">
                  <a href="#account-1">Account 1</a>
                  <a href="#account-2">Account 2</a>
                  <a href="#account-3">Account 3</a>
                </div>
              )}
            </li>
            <li onMouseEnter={() => handleMouseEnter('pages')} onMouseLeave={handleMouseLeave}>
              <a href="#pages">Pages <span className="dropdown-icon">▾</span></a>
              {dropdown === 'pages' && (
                <div className="dropdown">
                  <a href="#pages-1">Pages 1</a>
                  <a href="#pages-2">Pages 2</a>
                  <a href="#pages-3">Pages 3</a>
                </div>
              )}
            </li>
            <li>
              <a href="#buy-theme" className="buy-theme">Buy Theme</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header-right">
        <span className="contact-info">
          Call Us: <strong>089252 97807</strong>
        </span>
      </div>
    </header>
  );
};

export default About;
