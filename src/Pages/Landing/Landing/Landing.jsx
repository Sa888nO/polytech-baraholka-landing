import React from "react";
import {Header} from "./Modules/Header";
import {Footer} from "./Modules/Footer";
import {Bloc1} from "./Modules/Bloc1";
import {Bloc2} from "./Modules/Bloc2";
import {Bloc3} from "./Modules/Bloc3";

export const Landing = () => {
    return (
        <>
            <Header />
            <Bloc1 />
            <Bloc2 />
            <Bloc3 />
            <Footer />
        </>
    );
};
