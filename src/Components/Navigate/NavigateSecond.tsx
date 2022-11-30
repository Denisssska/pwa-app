import React from 'react';
import styles from './navigateSecond.module.scss';
import StyledButton from "../StyledButton/StyledButton";

const NavigatePanelSecond = () => {
    return (
        <nav className={styles.root}>
            <div>
                <h3>profile</h3>
                <StyledButton isDisabled={true} navigateItem="/profile"></StyledButton>
            </div>
            <div>
                <h3>About</h3>
                <StyledButton isDisabled={true} navigateItem="/about"></StyledButton>
            </div>
            <div>
                <h3>exit</h3>
                <StyledButton isDisabled={true} navigateItem="/exit"></StyledButton>
            </div>

        </nav>
    );
};

export default NavigatePanelSecond;