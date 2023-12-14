import React from "react";
import styles from "./TeamBlock.module.scss";
import {Title} from "./Components/Title";
import {Teammate} from "./Components/Teammate/Teammate";
import img from "./photos/MaskGroup.png";
import Vasya from "./photos/Vasya.png";
import Sanya from "./photos/Sanya.png";
import Yliya from "./photos/Ylya.png";
import Marat from "./photos/Marat.png";
import Kirill from "./photos/Kirill.png";
import Pasha from "./photos/Pasha.png";
import Inella from "./photos/Inella.png";
import Dima from "./photos/DIma.png";
import anon from "./photos/ANon.png";
import {Fade} from "react-reveal";
export const TeamBlock = () => {
    return (
        <Fade left>
            <div className={styles.wrapper} id="section2">
                <div className={styles.content}>
                    <Title />
                    <div className={styles.mainContent}>
                        <div className={styles.row1}>
                            <Teammate photo={img} name="Данила, менеджер" />
                            <Teammate photo={Marat} name="Марат, backend" />
                            <Teammate photo={anon} name="Павел, backend" />
                            <Teammate photo={Vasya} name="Василий, backend" />
                            <Teammate photo={anon} name="Анастасия, дизайнер" />
                            <Teammate photo={Yliya} name="Ульяна, дизайнер" />
                            <Teammate photo={Kirill} name="Кирилл, дизайнер" />
                            <Teammate photo={anon} name="Бахтовар, дизайнер" />
                            <Teammate photo={Pasha} name="Павел, frontend" />
                            <Teammate photo={Sanya} name="Александр, frontend" />
                            <Teammate photo={Inella} name="Инэлла, frontend" />
                            <Teammate photo={Dima} name="Дмитрий, frontend" />
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
};
