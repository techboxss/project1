import React from 'react';
import './header.css';

const Header = () => {
    return (
        <>
           
            <nav className="top-nav">
                <div className="top-nav-left">
                    <ul>
                        <li><a href="/about-us">About Us</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/store-location">Store Location</a></li>
                        <li><a href="/track-orders">Track Orders</a></li>
                        <li><a href="/blog">Blog</a></li>
                    </ul>
                </div>

                <div className="top-nav-right">
                    <ul>
                        
                       

                      
                    </ul>
                </div>
            </nav>

         
            <header className="header">
                <div className="header-left">
                   
                    <div className="logo">
                        <img src="/logo.png" alt="Logo" />
                    </div>

                   
                    <div className="select-vehicle">
                        <select>
                            <option>Select Vehicle</option>
                            <option>Vehicle 1</option>
                            <option>Vehicle 2</option>
                        </select>
                    </div>

                  
                    <div className="search-bar">
                        <input type="text" placeholder="Enter Keyword or Part Number" />
                        <button className="search-icon">
                            <img src="/search.svg" alt="Search" />
                        </button>
                    </div>
                </div>

                
                <div className="header-right">
                    <div className="icon-with-badge">
                        <img src="/heart.svg" alt="Wishlist" />
                        <span className="badge">0</span>
                    </div>

                    <div className="account">
                        <img src="/person.svg" alt="Account" />
                        <span>My Account</span>
                    </div>

                    <div className="icon-with-badge cart">
                        <img src="/cart-20.svg" alt="Cart" />
                        <span className="badge">7</span>
                        <span className="cart-price">₹1468.60</span>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
