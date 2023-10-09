import React from "react";
import styles from "./FindFastBlock.module.scss";
import {FindFast} from "./Components/FindFast";
import {PeopleIcon} from "./Components/PeopleIcon/PeopleIcon";
import picture from "./Group.png";
import r3 from "./r3.png";
import r4 from "./r4.png";
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
                        <img src={r3} alt=""  className={styles.r3} />
                        <img src={r4} alt="" className={styles.r4} />
                        <PeopleIcon />
                    </div>
                </div>
            </div>
        </div>
    );
};
