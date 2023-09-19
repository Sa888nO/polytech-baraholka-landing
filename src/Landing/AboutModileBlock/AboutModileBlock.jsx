import React from "react";
import styles from "./AboutModileBlock.module.scss";
import {Title} from "./Components/Title";
import {PeopleIcon} from "./Components/PeopleIcon/PeopleIcon";
import picture from "./Image.png";
export const AboutModileBlock = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <Title />
                <div className={styles.mainBlock}>
                    <div className={styles.fakeBlock}>
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
