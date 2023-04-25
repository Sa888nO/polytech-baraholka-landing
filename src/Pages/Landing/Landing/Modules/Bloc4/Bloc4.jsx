import styles from "./Bloc4.module.scss";
import React from "react";
import {Logo} from "./Icons/Logo1";
import {Logo2} from "./Icons/Logo2";
import img from "./Icons/screen.png";
import {Icon} from "./Icons/Icon";
import {Mans} from "./Icons/mans";
import ball1 from "./Icons/ball1.png";

export const Bloc4 = () => {
    return (
        <section className={styles.section}>
            <div className={styles.content}>
                <div className={styles.titleBlock}>
                    <Logo />
                    <div style={{
                        marginTop: 20
                    }}>
                        <Logo2 />
                    </div>
                </div>
            </div>
            <div className={styles.imgsBloc}>
                <img src={ball1} alt="" className={styles.ball1}/>
                <div className={styles.man}>
                    <Mans />
                </div>
                <img src={img} className={styles.img} />
            </div>

        </section>
    );
};
