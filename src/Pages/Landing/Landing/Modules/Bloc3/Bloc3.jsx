import styles from "./Bloc3.module.scss";
import React from "react";
import {Logo1} from "./Icons/Logo1";
import img from "./Icons/screen.png";
import {Icon} from "./Icons/Icon";
import {Logo2} from "./Icons/Logo2";
import {Man} from "./Icons/man";

export const Bloc3 = () => {
    return (
        <section className={styles.section}>
            <div className={styles.content}>
                <div className={styles.titleBlock}>
                    <Logo1 />
                    <Logo2 />
                    <p className={styles.p1}>
                        Договорись встретиться во встроенном мессенджере или по телефону
                    </p>
                    {/* <p className={styles.p2}>
                        КОМНАТЕ
                    </p> */}
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
            </div>

        </section>
    );
};
