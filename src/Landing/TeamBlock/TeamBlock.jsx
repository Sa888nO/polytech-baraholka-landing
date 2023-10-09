import React from "react";
import styles from "./TeamBlock.module.scss";
import {Title} from "./Components/Title";
import {Teammate} from "./Components/Teammate/Teammate";
import img from "./photos/MaskGroup.png";
export const TeamBlock = () => {
    return (
        <div className={styles.wrapper} id="section2">
            <div className={styles.content}>
                <Title />
                <div className={styles.mainContent}>
                    <div className={styles.row1}>
                        <Teammate photo={img} name="Данила, менеджер" />
                        <Teammate photo={img} name="Данила, менеджер" />
                        <Teammate photo={img} name="Данила, менеджер" />
                        <Teammate photo={img} name="Данила, менеджер" />
                        <Teammate photo={img} name="Данила, менеджер" />
                        <Teammate photo={img} name="Данила, менеджер" />
                        <Teammate photo={img} name="Данила, менеджер" />
                    </div>
                </div>
            </div>
        </div>
    );
};
