import styles from "./Bloc2.module.scss";
import React from "react";
import {Logo} from "./Icons/Logo";
import img from "./Icons/screen.png";
import {Icon} from "./Icons/Icon";
import {Man} from "./Icons/man";

export const Bloc2 = () => {
    return (
        <section className={styles.section}>
            <div className={styles.content}>
                <div className={styles.titleBlock}>
                    <Logo />
                    <p className={styles.p1}>
                        В соседнем подъезде или даже
                    </p>
                    <p className={styles.p2}>
                        КОМНАТЕ
                    </p>
                </div>
                {/* <div className={styles.contentBloc}> */}
                {/* <div className={styles.contentBloc1}>
                        <p>Cайт барахолки Московского Политеха, где студенты удобно обменивают и продают вещи, основываясь на их местоположении среди общежитий.</p>
                        <div className={styles.buttonBlock}>
                            <div className={styles.button1}>Начни поиск!</div>
                            <div className={styles.button2}>GitHub</div>
                        </div>
                    </div>
                    <div className={styles.icon}>
                        <Icon />
                    </div> */}
                {/* </div> */}
            </div>
            <div className={styles.imgBloc}>
                <img src={img} className={styles.img} />
                <div className={styles.man}>
                    <Man />
                </div>
            </div>

        </section>
    );
};
