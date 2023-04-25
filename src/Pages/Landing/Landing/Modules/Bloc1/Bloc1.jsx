import styles from "./Bloc1.module.scss";
import React from "react";
import {Logo} from "./Icons/Logo";
import {Icon} from "./Icons/Icon";
import ball from "./Icons/ball1.png";

const click = (link) => {
    location.href = link;
};

export const Bloc1 = () => {
    return (
        <section className={styles.section}>
            <div className={styles.content}>
                <Logo />
                <div className={styles.contentBloc}>
                    <div className={styles.contentBloc1}>
                        <p>Cайт барахолки Московского Политеха, где студенты удобно обменивают и продают вещи, основываясь на их местоположении среди общежитий.</p>
                        <div className={styles.buttonBlock}>
                            <div className={styles.button1} onClick={() => click("https://github.com/Web-studio-Team3")} >Начни поиск!</div>
                            <div className={styles.button2} onClick={() => click("https://github.com/Web-studio-Team3")} >GitHub</div>
                        </div>
                    </div>
                    <div className={styles.icon}>
                        <img src={ball} alt="" className={styles.ball}/>
                        <div className={styles.icon1}>
                            <Icon />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
