import React from "react";
import styles from "./Header.module.scss";
import {Logo} from "./Icons/Logo";

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <Logo />
                <nav className={styles.nav}>
                    <a href="#about-product">О продукте</a>
                    <a href="#about-team">Наша команда</a>
                    <a href="#about-task">Задачи</a>
                </nav>
                <p>2022-2023 гг</p>
            </div>
        </header>
    );
};
