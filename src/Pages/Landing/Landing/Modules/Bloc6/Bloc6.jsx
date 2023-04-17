import styles from "./Bloc6.module.scss";
import React from "react";
import {Logo1} from "./Icons/Logo1";
import img from "./Icons/screen.png";
import {Icon} from "./Icons/Icon";
import {Logo2} from "./Icons/Logo2";
import {Man} from "./Icons/man";

export const Bloc6 = () => {
    return (
        <section className={styles.section}>
            <div className={styles.content}>
                <div className={styles.titleBlock}>
                    <Logo1 />
                    <div className={styles.logo2}>
                        <Logo2 />
                    </div>
                    <p className={styles.p1}>
                        Второй семестр 2022-2023 года обучения
                    </p>
                    {/* <p className={styles.p2}>
                        КОМНАТЕ
                    </p> */}
                </div>
                <div className={styles.contentBloc}>
                    <div className={styles.contentBloc1}>
                        <h1>Фронт:</h1>
                        <p>{"1) Настраиваем PostCSS (необходим для кроссбраузерности)."}</p>
                        <p>{"2) Для расширения функционала реализована фильтрация."}</p>
                        <p>{"3) Реализована страница для добавления нового товара."}</p>
                        <p>{"4) Для удобства демонстрации разработки перешли на другой firebase."}</p>
                        <p>{"5) Приступили к реализации страницы отдельного товара."}</p>  
                    </div>
                    <div className={styles.contentBloc1}>
                        <h1>Бэк:</h1>
                        <p>{"1) Изучена новая архитектура реализации бэкенда, предоставляющая в будущем возможность более удобного тестирования и расширения функционала."}</p>
                        <p>{"2) Произведена разработка core ядра архитектуры, представляющей верх абстракции."}</p>
                        <p>{"3) Дорабатывается функционал ядра infrastructure, отвечающий за взаимодействие с базой данных и реализующий методы абстракции."}</p>
                        <p>{"4) Также частично реализован функционал ядра presentation, предоставляющего пользователю методы api."}</p>
                        <p>{"5) Доработаны способы авторизации пользователя с использованием jwt токенов."}</p>  
                    </div>
                    <div className={styles.contentBloc1}>
                        <h1>Дизайн:</h1>
                        <p>{"1) Исправлены и продолжают исправляться недочеты веб-версии приложения."}</p>
                        <p>{"2) Создан экран мобильной версии моего профиля и его настроек, профиля другого пользователя и главной страницы с объявлениями."}</p>
                        <p>{"3) Настроен предварительный прототип имеющихся экранов и на его основе создана гифка, отображающая работу в приложении."}</p>
                        <p>{"4) Создан лендинг проекта."}</p> 
                    </div>
                </div>
            </div>
            {/* </div> */}
            {/* <div className={styles.imgBloc}>
                <img src={img} className={styles.img} />
            </div> */}

        </section>
    );
};
