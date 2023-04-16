import React from "react";
import styles from "./Header.module.scss";
import {Logo} from "./Icons/Logo";

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <Logo />
                <nav className={styles.nav}>
                    <a>О продукте</a>
                    <a>Наша команда</a>
                    <a>Задачи</a>
                </nav>
                <p>2022-2023 гг</p>
            </div>
        </header>
    );
};
