import React from 'react';
import './burger.scss';
const BurgerMenu = () => {
    return (
        <div className="burger-menu">
            <input  className="menu-toggle" type="checkbox"/>
            <label className="menu-btn" htmlFor="menu-toggle">
                <span>some</span>
            </label>

            <ul className="menuBox">
                <li><a className="menu-item" href="#">Home</a></li>
                <li><a className="menu-item" href="#">About us</a></li>
                <li><a className="menu-item" href="#">Blog</a></li>
                <li><a className="menu-item" href="#">Articles</a></li>
                <li><a className="menu-item" href="#">Contacts</a></li>
            </ul>
        </div>
    );
};

export default BurgerMenu;