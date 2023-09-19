import React from "react";
import styles from "./Title.module.scss";

export const Title = () => {
    return (
        <div className={styles.title}>
            <div className={styles.get}>
                Совсем скоро и в
            </div>
            <div className={styles.inUniversity}>
                MOBILE - версии
            </div>
        </div>
    );
};