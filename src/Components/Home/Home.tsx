import React from "react";
import styles from './home.module.scss';
import sound from '../../audio/Клавиши печатающей машинки.mp3';
import useSound from "use-sound";

const Home = () => {
    const [play] = useSound(sound,{ volume: .3 });
    let txt = 'Welcome to your PWA ! ! !';

play()

    return (
        <div className={styles.container}>
            <h1  className={styles.typed_out}>{txt}</h1>
        </div>)
}


export default Home;