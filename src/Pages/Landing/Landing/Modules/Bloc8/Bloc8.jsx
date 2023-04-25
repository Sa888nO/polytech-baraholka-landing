import styles from "./Bloc8.module.scss";
import React from "react";
import phone1 from "./Icons/1.png";
import phone2 from "./Icons/2.png";
import phone3 from "./Icons/3.png";


export const Bloc8 = () => {
    return (
        <section className={styles.section}>
            <div className={styles.content}>
                <div className={styles.titleBlock}>
                    <p>Москва, 2022-23</p>
                    <p>Студенческая веб-студия Московского политеха</p>
                    {/* <img src={phone1} alt="" className={styles.subPhone} />
                    <img src={phone2} alt="" />
                    <img src={phone3} alt="" className={styles.subPhone} /> */}
                </div>
            </div>
        </section>
    );
};
