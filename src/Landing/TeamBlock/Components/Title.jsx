import React from "react";
import styles from "./Title.module.scss";

export const Title = () => {
    return (
        <div className={styles.title}>
            <div className={styles.get}>
                Встречай нашу
            </div>
            <div className={styles.inUniversity}>
                команду!
            </div>
        </div>
    );
};