import React from "react";
import styles from "./chat.module.scss";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

const Chat: React.FC = () => (
    <div className={styles.root}>
        <header className={styles.header}></header>
        <div className={styles.container}>
            <aside className={styles.aside}>
                <BurgerMenu/>
            </aside>
            <main className={styles.main}>main</main>
        </div>

    </div>

);

export default Chat;