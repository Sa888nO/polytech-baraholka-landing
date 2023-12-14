import React from "react";
import styles from "./GetInUniversityBlock.module.scss";
import {Title} from "./Components/Title";
import picture from "./Group.png";
import {Fade} from "react-reveal";
export const GetInUniversityBlock = () => {
    return (
        <Fade left>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <Title />
                    <div className={styles.subText}>Договорись встретиться во встроенном мессенджере <br/> или по телефону</div>
                    <div>
                        <div className={styles.picture}>
                            <img src={picture} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
};
