import React from "react";
import styles from "./FindFastBlock.module.scss";
import {FindFast} from "./Components/FindFast";
import {PeopleIcon} from "./Components/PeopleIcon/PeopleIcon";
import picture from "./Group.png";
export const FindFastBlock = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div>
                    <FindFast />
                    <div className={styles.subText}>В соседнем подъезде или даже Комнате</div>
                </div>
                <div>
                    <div className={styles.picture}>
                        <img src={picture} alt="" />
                        <PeopleIcon />
                    </div>
                </div>
            </div>
        </div>
    );
};
