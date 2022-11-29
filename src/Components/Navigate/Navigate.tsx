import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './navigate.module.scss';

const NavigatePanel = () => {
    return (
        <nav className={styles.root}>
            <div>
                <button></button>
                <NavLink className={styles.homeLink} to="/">Home</NavLink>
            </div>
            <div>
                <button></button>
                <NavLink className={styles.aboutLink} to="/about">About</NavLink>
            </div>
            <div>
                <button></button>
                <NavLink className={styles.calendarLink} to="/calendar">Calendar</NavLink>
            </div>

        </nav>
    );
};

export default NavigatePanel;