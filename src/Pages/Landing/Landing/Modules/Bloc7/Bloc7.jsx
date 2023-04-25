import styles from "./Bloc7.module.scss";
import React from "react";
import phone1 from "./Icons/1.png";
import phone2 from "./Icons/2.png";
import phone3 from "./Icons/3.png";
import ball1 from "./Icons/ball1.png";
import ball2 from "./Icons/ball2.png";

export const Bloc7 = () => {
    return (
        <section className={styles.section}>
            <div className={styles.content}>
                <div className={styles.titleBlock}>
                    <img src={ball1} alt="" className={styles.ball1}/>
                    <img src={ball2} alt="" className={styles.ball2}/>
                    <img src={phone1} alt="" className={styles.subPhone} />
                    <img src={phone2} alt=""  className={styles.phone}/>
                    <img src={phone3} alt="" className={styles.subPhone} />
                </div>
            </div>
        </section>
    );
};
