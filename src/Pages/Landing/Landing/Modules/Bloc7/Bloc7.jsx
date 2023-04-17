import styles from "./Bloc7.module.scss";
import React from "react";
import phone1 from "./Icons/1.png";
import phone2 from "./Icons/2.png";
import phone3 from "./Icons/3.png";

export const Bloc7 = () => {
    return (
        <section className={styles.section}>
            <div className={styles.content}>
                <div className={styles.titleBlock}>
                    <img src={phone1} alt="" className={styles.subPhone} />
                    <img src={phone2} alt="" />
                    <img src={phone3} alt="" className={styles.subPhone} />
                </div>
            </div>
        </section>
    );
};
