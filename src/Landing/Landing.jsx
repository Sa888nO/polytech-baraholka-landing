import React from "react";
import {Header} from "./Header/Header";
import {LinksBlock} from "./LinksBlock/LinksBlock";
import {FindFastBlock} from "./FindFastBlock/FindFastBlock";
import {GetInUniversityBlock} from "./GetInUniversityBlock/GetInUniversityBlock";
import {AboutModileBlock} from "./AboutModileBlock/AboutModileBlock";

export const Landing = () => {
    return (
        <>
            <Header />
            <LinksBlock />
            <FindFastBlock />
            <GetInUniversityBlock />
            <AboutModileBlock />
        </>
    );
};