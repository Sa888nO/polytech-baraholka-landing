import React from "react";
import styles from "./Title.module.scss";

export const Title = () => {
    return (
        <div className={styles.title}>
            <div className={styles.get}>
                Планы на текущий семестр
            </div>
            {/* <div className={styles.inUniversity}>
                на текущий семестр
            </div> */}
        </div>
    );
};