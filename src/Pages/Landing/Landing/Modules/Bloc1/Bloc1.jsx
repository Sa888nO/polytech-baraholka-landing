import styles from "./Bloc1.module.scss";
import React from "react";
import {Logo} from "./Icons/Logo";
import {Icon} from "./Icons/Icon";

export const Bloc1 = () => {
    return (
        <section className={styles.section}>
            <div className={styles.content}>
                <Logo />
                <div className={styles.contentBloc}>
                    <div className={styles.contentBloc1}>
                        <p>Cайт барахолки Московского Политеха, где студенты удобно обменивают и продают вещи, основываясь на их местоположении среди общежитий.</p>
                        <div className={styles.buttonBlock}>
                            <div className={styles.button1}>Начни поиск!</div>
                            <div className={styles.button2}>GitHub</div>
                        </div>
                    </div>
                    <div className={styles.icon}>
                        <Icon />
                    </div>
                </div>
            </div>
        </section>
    );
};
