import React from "react";
import styles from "./Teammate.module.scss";
import Pulse from "react-reveal/Pulse";
export const Teammate = ({photo, name}) => {
    return (
        <Pulse>
            <div className={styles.teammate}>
                <div className={styles.photo}>
                    <img src={photo} alt="" />
                </div>
                <div className={styles.name}>
                    {name}
                </div>
            </div>
        </Pulse>
    );
};
