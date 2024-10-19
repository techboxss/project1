import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    return (
        <header>
            <nav className="navbar">
                <div className="navbar-left">
                    <button className="navbar-toggle">
                        &#9776; Shop By Category
                    </button>
                    <ul className="navbar-menu">
                        {['Home', 'Megamenu', 'Shop', 'Blog', 'Account', 'Pages', 'Buy Theme'].map((item, index) => (
                            <li key={index} className="navbar-item">
                                <a href="#" onClick={() => toggleDropdown(index)}>
                                    {item}
                                    <span className="arrow">&#9662;</span>
                                </a>
                                {openDropdown === index && (
                                    <ul className="dropdown">
                                        <li><a href="#">Option 1</a></li>
                                        <li><a href="#">Option 2</a></li>
                                        <li><a href="#">Option 3</a></li>
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="navbar-right">
                    <span>Call Us: <a href="tel:08925297807">089252 97807</a></span>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
