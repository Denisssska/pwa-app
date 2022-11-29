import React from 'react';
import styles from './navigateFirst.module.scss';
import StyledButton from "../StyledButton/StyledButton";

const NavigatePanelFirst = () => {
    return (
        <nav className={styles.root}>
            <div>
                <StyledButton navigateItem='/'></StyledButton>
                <h3>Home</h3>
            </div>
            <div>
                <StyledButton navigateItem="/todolist"></StyledButton>
                <h3>todolist</h3>
            </div>
            <div>
                <StyledButton navigateItem="/calendar"></StyledButton>
                <h3>Calendar</h3>
            </div>

        </nav>
    );
};

export default NavigatePanelFirst;