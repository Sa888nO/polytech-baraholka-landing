import styles from "./Bloc5.module.scss";
import React from "react";
import {Logo} from "./Icons/Logo1";
import {Logo2} from "./Icons/Logo2";
import user1 from "./Icons/1.png";
import user2 from "./Icons/2.png";
import user3 from "./Icons/3.png";
import user4 from "./Icons/4.png";
import user5 from "./Icons/5.png";
import user6 from "./Icons/6.png";
import user7 from "./Icons/7.png";
import Right from "./Icons/Right.png";
import Left from "./Icons/Left.png";

export const Bloc5 = () => {

    return (
        <section className={styles.section} id="about-team">
            <div className={styles.content}>
                <div className={styles.titleBlock}>
                    <Logo />
                    <div style={{
                        marginTop: 20
                    }}>
                        <Logo2 />
                    </div>
                </div>
                <img src={Left} alt="" className={styles.handLeft} />
                <img src={Right} alt="" className={styles.handRight}/>
            </div>
            <div className={styles.block}>
                <div>
                    <img src={user1} alt="fff" />
                    <p>Данила, менеджер</p>
                </div>
                <div>
                    <img src={user2} alt="fff" />
                    <p>Вася, бэкендер</p>
                </div>
                <div>
                    <img src={user3} alt="fff" />
                    <p>Саша, фронтендер</p>
                </div>
            </div>
            <div className={styles.block}>
                <div>
                    <img src={user4} alt="fff" />
                    <p>Ульяна, дизайнер</p>
                </div>
                <div>
                    <img src={user5} alt="fff" />
                    <p>Марат, бэкендер</p>
                </div>
                <div>
                    <img src={user6} alt="fff" />
                    <p>Кирилл, дизайнер</p>
                </div>
                <div>
                    <img src={user7} alt="fff" />
                    <p>Паша, фронтендер</p>
                </div>
            </div>
        </section>
    );
};
