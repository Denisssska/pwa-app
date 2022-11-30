import React from 'react';
import styles from './navigateFirst.module.scss';
import StyledButton from "../StyledButton/StyledButton";
import useSound from "use-sound";
import stingers from '../../audio/stingers-001-6294.mp3';

const NavigatePanelFirst = () => {
    const [play] = useSound(stingers,{ volume: .3 });
    // const myAudio = new Audio(boop);

    return (
        <nav className={styles.root}>
            <div>
                <StyledButton isDisabled={false} play={play} navigateItem='/'></StyledButton>
                <h3>Home</h3>
            </div>
            <div>
                <StyledButton isDisabled={false} play={play} navigateItem="/todolist"></StyledButton>
                <h3>todolist</h3>
            </div>
            <div>
                <StyledButton isDisabled={false} play={play} navigateItem="/calendar"></StyledButton>
                <h3>Calendar</h3>
            </div>
        </nav>
    );
};

export default NavigatePanelFirst;