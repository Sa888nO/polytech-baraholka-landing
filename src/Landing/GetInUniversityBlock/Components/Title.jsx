import React from "react";
import styles from "./Title.module.scss";

export const Title = () => {
    return (
        <div className={styles.title}>
            <div className={styles.get}>
                Забери прямо в ВУЗе
            </div>
            {/* <div className={styles.inUniversity}>
                прямо в ВУЗе
            </div> */}
        </div>
    );
};