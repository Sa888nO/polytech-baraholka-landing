import React from "react";
import {Logo} from "./Components/Logo";
import styles from "./Header.module.scss";

export const Header = () => {
    return (
        <header className={styles.wrapper}>
            <div className={styles.content}>
                <Logo />
                <nav className={styles.nav}>
                    <a href="/">О продукте</a>
                    <a href="/">Наша команда</a>
                    <a href="/">Задачи</a>
                </nav>
            </div>
        </header>
    );
};