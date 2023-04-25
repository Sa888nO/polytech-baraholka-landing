import styles from "./Bloc2.module.scss";
import React from "react";
import {Logo} from "./Icons/Logo";
import img from "./Icons/screen.png";
import {Icon} from "./Icons/Icon";
import {Man} from "./Icons/man";
import ball1 from "./Icons/ball1.png";
import ball2 from "./Icons/ball2.png";

export const Bloc2 = () => {
    return (
        <section className={styles.section} id="about-product">
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
            </div>
            <div className={styles.imgBloc}>
                <img src={ball1} alt="" className={styles.ball1}/>
                <img src={ball2} alt="" className={styles.ball2}/>
                <img src={img} className={styles.img} />
                <div className={styles.man}>
                    <Man />
                </div>
            </div>

        </section>
    );
};
