import React from "react";
import styles from "./Teammate.module.scss";
export const Teammate = ({photo, name}) => {
    return (
        <div className={styles.teammate}>
            <div className={styles.photo}>
                <img src={photo} alt="" />
            </div>
            <div className={styles.name}>
                {name}
            </div>
        </div>
    );
};
