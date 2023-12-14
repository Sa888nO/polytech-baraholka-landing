import React from "react";
import styles from "./LinksBlock.module.scss";
import {Baraholka} from "./Components/Baraholka";
import {PeopleIcon} from "./Components/PeopleIcon/PeopleIcon";
import r1 from "./r1.png";
import Fade from "react-reveal/Fade";

export const LinksBlock = () => {
    return (
        <Fade left>
            <div className={styles.wrapper} id="section1">
                <div className={styles.content}>
                    <Baraholka />
                    <div className={styles.mainContent}>
                        <div className={styles.infoBlock}>
                            <div className={styles.infoText}>Cайт барахолки Московского Политеха, где студенты удобно обменивают и продают вещи, основываясь на их местоположении среди общежитий.</div>
                            <div className={styles.buttonContent}>
                                <button className={styles.buttonToSite}><a href="http://217.28.220.136:8888/" target="_blank" rel="noreferrer">Начни поиск!</a></button>
                                <button className={styles.buttonToGit}><a href="https://github.com/Web-studio-Team3" target="_blank" rel="noreferrer">GitHub</a></button>
                            </div>
                        </div>
                        <PeopleIcon />
                    </div>
                </div>
            </div>
        </Fade>
    );
};
