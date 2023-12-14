import React from "react";
import {Header} from "./Header/Header";
import {LinksBlock} from "./LinksBlock/LinksBlock";
import {FindFastBlock} from "./FindFastBlock/FindFastBlock";
import {GetInUniversityBlock} from "./GetInUniversityBlock/GetInUniversityBlock";
import {AboutModileBlock} from "./AboutModileBlock/AboutModileBlock";
import {TeamBlock} from "./TeamBlock/TeamBlock";
import {WorkBlock} from "./WorkBlock/WorkBlock";
import {Footer} from "./Footer/Footer";

export const Landing = () => {
    return (
        <>
            <Header />
            <LinksBlock />
            <FindFastBlock />
            <GetInUniversityBlock />
            <AboutModileBlock />
            <TeamBlock />
            <WorkBlock />
            <Footer />
        </>
    );
};