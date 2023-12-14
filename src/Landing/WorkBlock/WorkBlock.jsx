import React from "react";
import styles from "./WorkBlock.module.scss";
import {Title} from "./Components/Title";
import Fade from "react-reveal/Fade";
export const WorkBlock = () => {
    return (
        <div className={styles.wrapper} id="section3">
            <div className={styles.content}>
                <Title />
                <div className={styles.mainContent}>
                    <div className={styles.title}>
                        Фронт
                    </div>
                    <Fade left cascade>
                        <ul>
                            <li>
                            Сделать адаптив под все разрешения 375 - 1920
                            </li>
                            <li>
                            Реализовать авторизацию в токенах
                            </li>
                            <li>
                            Реализовать работу с товарами, фото и профилями
                            </li>
                            <li>
                            Реализовать геокарту
                            </li>
                            <li>
                            Редизайн
                            </li>
                            <li>
                            Реализовать возможность писать (чат между покупателем ипродавцом)
                            </li>
                            <li>
                            Реализовать сортировки по категория
                            </li>
                        </ul>
                    </Fade>
                    <div className={styles.title}>
                        Бэк
                    </div>
                    <Fade right cascade>
                        <ul>
                            <li>
                            Исправить логику добавления картинок
                            </li>
                            <li>
                            Добавить фильтрацию
                            </li>
                            <li>
                            Добавить поиск
                            </li>
                            <li>
                            Добавить чат
                            </li>
                            <li>
                            Добавить пагинацию к списку товаров
                            </li>
                        </ul>
                    </Fade>
                    <div className={styles.title}>
                        Дизайн
                    </div>
                    <Fade left cascade>
                        <ul>
                            <li>
                            Доделать мобилку
                            </li>
                            <li>
                            Редизайн веба
                            </li>
                            <li>
                            Реализовать реакции
                            </li>
                        </ul>
                    </Fade>
                </div>
            </div>
        </div>
    );
};
