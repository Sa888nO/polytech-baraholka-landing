import React from "react";
import styles from "./LinksBlock.module.scss";
import {Baraholka} from "./Components/Baraholka";
import {PeopleIcon} from "./Components/PeopleIcon/PeopleIcon";
export const LinksBlock = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <Baraholka />
                <div className={styles.mainContent}>
                    <div className={styles.infoBlock}>
                        <div className={styles.infoText}>Cайт барахолки Московского Политеха, где студенты удобно обменивают и продают вещи, основываясь на их местоположении среди общежитий.</div>
                        <div className={styles.buttonContent}>
                            <button className={styles.buttonToSite}>Начни поиск!</button>
                            <button className={styles.buttonToGit}>GitHub</button>
                        </div>
                    </div>
                    <PeopleIcon />
                    {/* <div className={styles.PeopleIcon}>
                    </div> */}
                </div>
            </div>
        </div>
    );
};
