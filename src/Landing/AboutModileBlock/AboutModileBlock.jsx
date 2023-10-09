import React from "react";
import styles from "./AboutModileBlock.module.scss";
import {Title} from "./Components/Title";
import {PeopleIcon} from "./Components/PeopleIcon/PeopleIcon";
import picture from "./Image.png";
import r5 from "./r5.png";
export const AboutModileBlock = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <Title />
                <div className={styles.mainBlock}>
                    <div className={styles.fakeBlock}>
                        <img src={r5} alt="" className={styles.r5} />
                        <PeopleIcon />
                    </div>
                    <div className={styles.picture}>
                        <img src={picture} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};
