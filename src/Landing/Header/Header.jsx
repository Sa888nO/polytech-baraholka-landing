import React from "react";
import {Logo} from "./Components/Logo/Logo";
import styles from "./Header.module.scss";

export const Header = () => {
    return (
        <header className={styles.wrapper}>
            <div className={styles.content}>
                <Logo />
                <nav className={styles.nav}>
                    <a href="#section1">О продукте</a>
                    <a href="#section2">Наша команда</a>
                    <a href="#section3">Задачи</a>
                </nav>
            </div>
        </header>
    );
};